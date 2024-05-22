<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAiToolRequest;
use App\Http\Requests\UpdateAiToolRequest;
use App\Http\Resources\AiToolResource;
use App\Models\AiTool;
use Inertia\Inertia;

class AiToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = AiTool::query();
        
        $tools = $query->paginate(8)->onEachSide(1);

        Inertia::share('sharedTools', AiToolResource::collection($tools) );
        return Inertia::render('Tools/Tools', [
            'tools' => AiToolResource::collection($tools),
        ]);
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
    public function store(StoreAiToolRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(AiTool $aiTool)
    {
        //
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
