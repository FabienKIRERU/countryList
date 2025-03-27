<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = [
        'name',
        'capital',
        'continent',
        'phone',
        'alpha_3',
        'continent_code',
        'currency_code',
        'currency_symbol',
        'currency_name',
        'flag',
    ];
}
