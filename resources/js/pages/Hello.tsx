import React from 'react';
import { usePage } from '@inertiajs/react';

interface PageProps {
    message: string;
}

export default function Hello() {
    const { message } = usePage<PageProps>().props;

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">{message}</h1>
        </div>
    );
}
