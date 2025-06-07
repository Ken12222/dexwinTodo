<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        TaskController::class
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/Task", [TaskController::class, "index"])->name("task");
Route::get('/task/{Task}', [TaskController::class, "show"])->name('task.show');
Route::get("/Task/Create", [TaskController::class, "create"])->name("task.create");
Route::get("/Task/{Task}/edit", [TaskController::class, "edit"])->name("task.edit");
Route::post("/Task", [TaskController::class, "store"])->name("task.store");
Route::post("/Task/{Task}", [TaskController::class, "update"])->name("task.update");
Route::delete("/Task/{Task}", [TaskController::class, "destroy"])->name("task.delete");

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
