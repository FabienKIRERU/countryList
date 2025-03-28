<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\CountryRepository;
use App\Repositories\Contracts\BaseRepositoryInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(BaseRepositoryInterface::class, CountryRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
