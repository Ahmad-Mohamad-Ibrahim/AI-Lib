<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChatEditRequest;
use App\Http\Resources\ChatMessageResource;
use App\Http\Resources\ChatResource;
use App\Http\Responses\OpenAiResponse;
use App\Models\Chat;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function setChatOption(Request $request, string $id)
    {
        $request->session()->put('model', $request->model);
        // dd($request->session()->get('model'));
        return to_route('chat.show', $id);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        // all the new chats will have the name (new chat)
        $user = $request->user();
        $chat = $user->chats()->create([
            'name' => 'New Chat'
        ]);

        return to_route('chat.show', $chat->id);
    }

    public function storeMessage(Request $request, string $id)
    {
        $cached = false;
        $chat = Chat::find($id);
        // check cache for a similar prompt
        $prompt = $request->prompt;
        $messageContent = '';
        if (!Cache::store('file')->has($prompt)) {
            $response = new OpenAiResponse([
                'model' => $request->session()->get('model', 'gpt-3.5-turbo'),
                'messages' => [
                    [
                        'role' => 'user',
                        'content' => $request->prompt,
                    ],
                ],
            ]);

            $response = $response->toResponse($request);

            if (isset($response['error'])) {
                return to_route('chat.show', $id)
                    ->with('error', 'An error occured Exception is if the error persists please try to change the model');
            }

            $messageContent = $response['choices'][0]['message']['content'];
            Cache::store('file')->put($prompt, $messageContent);
        } else {
            $cached = true;
            $messageContent = Cache::store('file')->get($prompt);
        }

        // store my message
        $message = $chat->messages()->create(['speaker' => 'me', 'body' => $request->prompt]);

        // save message in db
        $message = $chat->messages()->create([
            'speaker' => 'gpt',
            'body' => $messageContent,
        ]);

        $message->save();

        return to_route('chat.show', $chat->id)
            ->with('cached', $cached);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id = null)
    {
        // if user is logged in get all his chats
        $data = [];
        $user = $request->user();
        $latestChat = null;

        if ($user) {
            // dd($user);
            $chats = $user->chats;
            if ($id === null) {
                $latestChat = $chats->last();
            } else {
                $latestChat = $chats->find($id); // check
            }

            if (!$latestChat) {
                $latestChat = $user->chats()->create(['name' => 'New Chat']);
            }

            $messages = $latestChat->messages;
            $messages = $messages->reverse();
            $data['chats'] = ChatResource::collection($chats);
            $data['messages'] = ChatMessageResource::collection($messages);
        }

        if (!Cache::store('file')->has('openai_models')) {
            // get the models
            $models = Http::withToken(config('services.openai.secret'))->get('https://api.openai.com/v1/models')->json('data');
            // cache the models
            Cache::store('file')->forever('openai_models', $models);
        }

        $data['models'] = Cache::store('file')->get('openai_models');

        $data['preferredModel'] = $request->session()->get('model');

        if (isset($data['chats'])) {
            $data['currentChat'] = $latestChat?->id;
        }

        if (session('error')) {
            $data['error'] = session('error');
        }

        // provide info wether message is cached or not
        $data['cached'] = session('cached', false);

        return Inertia::render("Chat/Chat", $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ChatEditRequest $request, string $id)
    {
        $data =  $request->validated();
        $chat = Chat::findOrFail($id);
        $chat->update($data);
        $chat->save();

        return to_route('chat.show', $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $chat = Chat::find($id);
        $chat->delete();

        return to_route('chat.show');
    }
}
