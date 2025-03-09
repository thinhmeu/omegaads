<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*404*/
Route::any('/404.html', 'RouterController@not_found');

Route::get("/", "HomeController@index");
Route::get('ngo-20-ho-tung-mau.kml', function (){
    define('IS_MOBILE', false);
    return view('ngo20');
});
Route::get('ngo-26-ho-tung-mau.kml', function (){
    define('IS_MOBILE', false);
    return view('ngo26');
});
