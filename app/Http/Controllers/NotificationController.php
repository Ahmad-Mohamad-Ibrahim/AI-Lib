<?php

namespace App\Http\Controllers;

use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function show(string $id)
    {
        // Retrieve the authenticated user
        $user = Auth::user();

        // Find the notification by ID and ensure it belongs to the authenticated user
        $notification = DatabaseNotification::where('id', $id)
            ->where('notifiable_id', $user->id)
            ->firstOrFail();

        // Mark the notification as read if necessary
        if (is_null($notification->read_at)) {
            $notification->markAsRead();
        }

        if (isset($notification->data['resource_link'])) {
            return redirect($notification->data['resource_link']);
        }  
        return redirect(route('home'));
    }
}
