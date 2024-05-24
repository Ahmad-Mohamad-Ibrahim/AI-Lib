<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAiToolRequest;
use App\Http\Requests\UpdateAiToolRequest;
use App\Http\Resources\AiToolResource;
use App\Http\Resources\CategoryResource;
use App\Models\AiTool;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AiToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = AiTool::query();

        $query->where('is_verified' , true);

        if(request('category')) {
            $query->where('category_id', request('category'));
        }

        if(request('search')) {
            $query->where('name','like','%'. request('search') .'%');
        }
        if(request('orderBy')) {
            $query->orderBy(request('orderBy'), 'DESC');
        }
        
        $tools = $query->paginate(9)->onEachSide(1);

        $categories = Category::all();

        Inertia::share('sharedTools', AiToolResource::collection($tools) );
        return Inertia::render('Tools/Tools', [
            'tools' => AiToolResource::collection($tools),
            'queryParams' => request()->query() ? request()->query() : null,
            'categories' => CategoryResource::collection($categories)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        // dd("hello");
        return Inertia::render('Tools/ToolAdd/ToolAdd' , [
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAiToolRequest $request)
    {
        //
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

        if($aiTool && $aiTool->is_verified) {
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
