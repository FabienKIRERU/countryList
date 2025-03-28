import React from "react";
import { usePage } from "@inertiajs/react";

interface Country {
    id: number;
    code: string;
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
                    <h2 className="text-xl font-semibold mb-2">{continent}</h2>
                    <ul className="list-none pl-0 m-2">
                        {countryList.map((country) => (
                            <li key={country.id} className="flex items-center gap-2 mb-2">
                                <img src={"flags/" + country.code + ".svg"} alt="flag" className="w-8 h-8" />
                                <span>{country.name} ({country.alpha_3})</span>
                                <span className="ml-2 text-gray-600">+{country.phone}</span>
                                <div className="ml-4 text-sm text-gray-500">
                                    Capital: {country.capital} | {country.currency_name} ({country.currency_code}) {country.currency_symbol}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
