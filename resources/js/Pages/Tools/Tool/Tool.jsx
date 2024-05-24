import React from 'react';
import SingleToolView from './Partials/SingleToolView';
import Guest from '@/Layouts/GuestLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Reviews from './Partials/Reviews';

export default function Tool({ auth, tool }) {
    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title={`Tool - ${tool.data.name}`} />
                    <SingleToolView tool={tool.data} />
                    <Reviews />

                </Authenticated> :
                    <Guest auth={auth}>
                        <Head title={`Tool - ${tool.data.name}`} />
                        <SingleToolView tool={tool.data} />
                        <Reviews />

                    </Guest>
            }
        </>
    )
}
