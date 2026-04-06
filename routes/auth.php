<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::middleware(['guest'])->group(function () {
    Route::get('login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');

    Route::get('authenticate', fn (Request $request) => tap(
        redirect()->intended(route('dashboard')),
        fn () => $request->authenticate(),
    ));
});

Route::post('logout', fn (Request $request) => $request->logout())
    ->middleware(['auth'])->name('logout');
