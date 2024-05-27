<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateImageRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class ProfileImageController extends Controller
{
    public function update(ProfileUpdateImageRequest $request): RedirectResponse
    {
        $data = $request->validated();
        // dd($request->hasFile("image"));

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = 'userimages/' . $image->getClientOriginalName();
            $image->storeAs('public', $imageName);
            $data['image'] = $imageName;
        }
        $request->user()->image = $data['image'];
        $request->user()->save();

        return Redirect::route('profile.edit')
            ->with('status', 'profile-updated');
    }
}
