import React, { useState } from "react";
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
    const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const continents = Object.keys(countries);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 p-4 border-r border-gray-300">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Filter by Continent:</label>
                    <select 
                        className="border p-2 rounded w-full"
                        onChange={(e) => setSelectedContinent(e.target.value || null)}
                        value={selectedContinent || ""}
                    >
                        <option value="">All</option>
                        {continents.map((continent) => (
                            <option key={continent} value={continent}>{continent}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="font-semibold block mb-1">Search:</label>
                    <input 
                        type="text" 
                        className="border p-2 rounded w-full"
                        placeholder="Search country..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} 
                    />
                </div>
            </div>
            
            {/* Main Content */}
            <div className="w-3/4 p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">List of countries by Island:</h1>
                {Object.entries(countries).map(([continent, countryList]) => (
                    (!selectedContinent || selectedContinent === continent) && (
                        <div key={continent} className="mb-6">
                            <h2 className="text-xl font-semibold mb-2 text-center">{continent}</h2>
                            <ul className="list-none pl-0">
                                {countryList.filter(country => 
                                    country.name.toLowerCase().includes(searchTerm) ||
                                    country.alpha_3.toLowerCase().includes(searchTerm)
                                ).map((country) => (
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
                    )
                ))}
            </div>
        </div>
    );
}