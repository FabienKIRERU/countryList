<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;

class CountryController extends Controller
{
    
    public function index(): Response{
        $countries = Country::all()->groupBy('continent');
        return Inertia::render('Countries', [
            'countries' => $countries
        ]);
    }
}
