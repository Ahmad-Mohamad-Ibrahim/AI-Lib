<?php

namespace App\Http\Controllers;

use App\Http\Resources\ChatMessageResource;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // if user is logged in get all his chats
        $data = [];
        $user = Auth()->user();
        if ($user) {

            $chats = $user->chats;
            $latestChat = $chats->last();
            $messages = $latestChat->messages;
            $messages = $messages->reverse();
            $data['chats'] = ChatResource::collection($chats);
            $data['messages'] = ChatMessageResource::collection($messages);
        }

        if (!Cache::has('openai_models')) {
            // get the models
            $models = Http::withToken(config('services.openai.secret'))->get('https://api.openai.com/v1/models')->json('data');
            // cache the models
            Cache::forever('openai_models', $models);
        }
        $data['models'] = Cache::get('openai_models');

        $data['preferredModel'] = Cache::get('model', 'gpt-3.5-turbo');

        if (isset($data['chats'])) {
            $data['currentChat'] = $data['chats']->last()->id;
        }

        return Inertia::render("Chat/Chat", $data);
    }

    public function setChatOption(Request $request)
    {
        Cache::forever('model', $request?->model);

        return ['code' => 200];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeMessage(Request $request, string $id)
    {
        $chat = Chat::find($id);
        // check cache for a similar prompt
        $prompt = $request->prompt;
        $messageContent = '';
        if (!Cache::has($prompt)) {

            $response = Http::withToken(config('services.openai.secret'))->post('https://api.openai.com/v1/chat/completions', [
                'model' => Cache::get('model', 'gpt-3.5-turbo'),
                'messages' => [
                    [
                        'role' => 'user',
                        'content' => $request->prompt,
                    ],
                ],
            ])->json();

            if (isset($response['error'])) {
                abort(500, $response['error']);
            }

            $messageContent = $response['choices'][0]['message']['content'];
            Cache::forever($prompt, $messageContent);
        } else {
            $messageContent = Cache::get($prompt);
        }

        // store my message
        $message = $chat->messages()->create(['speaker' => 'me', 'body' => $request->prompt]);

        // save message in db
        $message = $chat->messages()->create([
            'speaker' => 'gpt',
            'body' => $messageContent,
        ]);

        $message->save();

        return to_route('chat.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
