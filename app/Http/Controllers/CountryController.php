<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use App\Repositories\CountryRepository;

class CountryController extends Controller
{
    private $countryRepository;

    public function __construct(CountryRepository $countryRepository){
        $this->countryRepository = $countryRepository;
    }
    
    public function index(): Response{
        $countries = $this->countryRepository->getAll();
        return Inertia::render('Countries', [
            'countries' => $countries
        ]);
    }

}
