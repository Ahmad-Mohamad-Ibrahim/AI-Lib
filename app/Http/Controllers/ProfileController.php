<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $data = $request->validated();
        // dd($data);

        $user = $request->user();
        $user->name = $data['name'];
        $user->email = $data['email'];

        // this fixed the bug when Eloquent retrieves the relative path from db it turns it into full uri
        // and then $user->save() saves it as uri in db
        // this is fixed by simply removing http://localhost:8000/storage/ from the uri to get /userimages/photo.jpg for example 
        $appUrl = config('app.url') . '/storage/';
        // dd($appUrl);
        $user->image = str_replace($appUrl, '', $user->image);
        // dd($user->image);

        // dd($user);
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();
        // dd($request->user());


        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
