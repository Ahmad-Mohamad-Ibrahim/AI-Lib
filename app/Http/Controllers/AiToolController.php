<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAiToolRequest;
use App\Http\Requests\UpdateAiToolRequest;
use App\Http\Resources\AiToolResource;
use App\Http\Resources\CategoryResource;
use App\Models\AiTool;
use App\Models\Category;
use App\Models\User;
use App\Notifications\AiToolPublished;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AiToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = AiTool::query();

        $query->where('is_verified', true);

        if (request('category')) {
            $query->where('category_id', request('category'));
        }

        if (request('search')) {
            $query->where('name', 'like', '%' . request('search') . '%');
        }
        if (request('orderBy')) {
            $query->orderBy(request('orderBy'), 'DESC');
        }

        $tools = $query->paginate(9)->onEachSide(1);

        $categories = Category::all();

        return Inertia::render('Tools/Tools', [
            'tools' => AiToolResource::collection($tools),
            'queryParams' => request()->query() ? request()->query() : null,
            'categories' => CategoryResource::collection($categories),
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        // dd("hello");
        return Inertia::render('Tools/ToolAdd/ToolAdd', [
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAiToolRequest $request)
    {
        $data = $request->validated();
        // store the image 

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            // $splitted = explode('.', $image->getClientOriginalName());
            // $imageExt = $splitted[count($splitted) -1];
            // $imageName = 'tools/' . Str::random(9) .'.'. $imageExt;
            $imageName = 'tools/' . $image->getClientOriginalName();
            $image->storeAs('public', $imageName);
            $data['image'] = $imageName;
        }

        $aiTool = AiTool::create($data);

        // send notification to admins
        $admins = User::where('role', 'admin')->get();
        if (count($admins) > 0) {
            Notification::sendNow($admins, new AiToolPublished($aiTool));
        }
        return to_route('tools.index')
            ->with('success', 'Our team will review your request shortly');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // return Inertia::render('Tool/Tool', [
        //     'tool' => new AiToolResource($aiTool),
        // ]);
        // get the model
        $aiTool = AiTool::find($id);

        if ($aiTool && $aiTool->is_verified) {
            return Inertia::render('Tools/Tool/Tool', [
                'tool' => new AiToolResource($aiTool),
            ]);
        } else {
            abort(404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AiTool $aiTool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAiToolRequest $request, AiTool $aiTool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AiTool $aiTool)
    {
        //
    }
}
