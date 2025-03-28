<?php
namespace App\Repositories;

use App\Models\Country;
use App\Repositories\Contracts\BaseRepositoryInterface;

class CountryRepository implements BaseRepositoryInterface
{
    public function getAll()
    {
        return Country::all()->groupBy('continent');
    }

    public function findById(int $id)
    {
        return Country::findOrFail($id);
    }

    public function create(array $data)
    {
        return Country::create($data);
    }

    public function update(int $id, array $data)
    {
        $country = Country::findOrFail($id);
        $country->update($data);
        return $country;
    }

    public function delete(int $id)
    {
        return Country::destroy($id);
    }
}
