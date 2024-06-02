<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(ReviewRequest $request) 
    {
        if($request->user()->reviews->count()) {
            return to_route('tools.show' , $request->validated()['ai_tool_id'])
                ->with('error', 'You can only review a tool once');
        }

        // dd($request->validated());
        $data = $request->validated();
        $user = $request->user();
        $review = $user->reviews()->create($data);
        
        $tool =  $review->aiTool;
        // dd($tool->reviews);
        $reviewsCount = $tool->reviews->count();
        
        if( $reviewsCount > 0) {
            $tool->rating = (($tool->reviews->sum('rating') / $reviewsCount) + $tool->rating) / 2;
            $tool->save();
        }

        return to_route('tools.show' , $data['ai_tool_id']);
    }
}
