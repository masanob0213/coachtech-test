<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

Route::get('/building', function () {
    return '建物です';
});
Route::get('/building/{room}',[TestController::class, 'index']);