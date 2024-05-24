<?php

use App\Http\Controllers\AiToolController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/' , function() {
    return Inertia::render('Home/Home');
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['prefix'=> '/tools'], function () {
    Route::get('/', [AiToolController::class, 'index'])->name('tools.index');
    Route::get('/publish', [AiToolController::class, 'create'])->name('tools.create');
    Route::get('/{id}', [AiToolController::class, 'show'])->name('tools.show');
    // Route::post('/', [AiToolController::class, 'store'])->name('tools.store');
});


require __DIR__.'/auth.php';
