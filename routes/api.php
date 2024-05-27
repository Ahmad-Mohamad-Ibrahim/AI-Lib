<?php

use App\Http\Controllers\ChatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix'=> '/chat', 'middleware' => ['auth', 'verified']], function () {
    Route::post('/set-option', [ChatController::class,'setChatOption'])->name('chat.set-option');
});