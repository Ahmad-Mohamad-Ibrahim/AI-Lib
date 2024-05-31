<?php

use App\Http\Controllers\AiToolController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileImageController;
use App\Http\Middleware\AdminAuthorization;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/' , function() {
    return Inertia::render('Home/Home');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile/image', [ProfileImageController::class, 'update'])->name('profile.updateImage');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::group(['prefix'=> '/tools'], function () {
    Route::get('/', [AiToolController::class, 'index'])->name('tools.index');
    Route::get('/publish', [AiToolController::class, 'create'])->name('tools.create');
    Route::get('/{id}', [AiToolController::class, 'show'])->name('tools.show');
    Route::post('/', [AiToolController::class, 'store'])->name('tools.store');
});

Route::group(['prefix'=> '/contact'], function () {
    Route::get('/', [ContactMessageController::class, 'create'])->name('contact.create');
    Route::post('/', [ContactMessageController::class, 'store'])->name('contact.store');
});

Route::group(['prefix'=> '/notifications'], function () {
    Route::get('/{notification}', [NotificationController::class, 'show'])->name('notification.show');
});

Route::group(['prefix'=> '/chat', 'middleware' => ['auth', 'verified']], function () {
    Route::get('/{id?}', [ChatController::class, 'show'])->name('chat.show');
    Route::post('/set-option/{id?}', [ChatController::class,'setChatOption'])->name('chat.set-option');
    Route::post('/', [ChatController::class, 'store'])->name('chat.store');
    Route::delete('/{id}', [ChatController::class, 'destroy'])->name('chat.destroy');
    Route::patch('/{id}', [ChatController::class, 'update'])->name('chat.update');
    Route::post('/{id}', [ChatController::class, 'storeMessage'])->name('chat.store-message');
});

Route::group(['prefix'=> '/gallery'], function () {
    Route::get('/', [GalleryController::class, 'index'])->name('gallery.index');
});

Route::middleware(['auth', 'verified', AdminAuthorization::class])->group(function () {
    Route::put('/tools/verify/{id}', [AiToolController::class, 'verify'])->name('tools.verify');
    Route::delete('/tools/{id}', [AiToolController::class, 'destroy'])->name('tools.destroy');
});



require __DIR__.'/auth.php';
