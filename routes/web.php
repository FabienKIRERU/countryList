<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CountryController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/hello', function () {
    return Inertia::render('Hello', [
        'message' => 'Salut toi, Welcome to Inertia avec React'
    ]);
});

Route::get('/countries', [CountryController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
