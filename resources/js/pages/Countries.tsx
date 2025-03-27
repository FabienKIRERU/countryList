import React from "react";
import { usePage } from "@inertiajs/react";

interface Country {
    id: number;
    flag: string;
    alpha_3: string;
    phone: string;
    name: string;
    capital: string;
    currency_name: string;
    currency_code: string;
    currency_symbol: string;
}

interface PageProps {
    countries: Record<string, Country[]>; // Clé = Continent, Valeur = Liste de pays
}

export default function Countries() {
    const { countries } = usePage<PageProps>().props;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">List of countries by Continent:</h1>
            {Object.entries(countries).map(([continent, countryList]) => (
                <div key={continent} className="mb-6">
                    <h2 className="text-xl font-semibold">{continent}</h2>
                    <ul className="list-disc pl-6">
                        {countryList.map((country) => (
                            <li key={country.id}>
                                {country.flag} {country.alpha_3} {country.phone} {country.name} <br />
                                Capital: {country.capital} | {country.currency_name} ({country.currency_code}) {country.currency_symbol}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
