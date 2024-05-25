import { Head, router } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react'
import ToolsContainer from './Partials/ToolsContainer';
import Pagination from '@/Components/Pagination';
import ToolSearch from './Partials/ToolSearch';
import { useState } from 'react';

export default function Tools({ auth, categories, tools, queryParams, success }) {
    // const onQuery
    queryParams = queryParams ? queryParams : {};
    
    const queryByParams = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route('tools.index'), queryParams);
    }
    return (
        <>
            {success && <div className="bg-emerald-500 mb-2 px-4 text-white rounded">{success}</div>}
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Tools" />
                    <section class="py-6 px-2 lg:px-12 mb-20">
                        <ToolSearch onSearchChanged={queryByParams} queryParams={queryParams} />
                        <ToolsContainer tools={tools.data} categories={categories.data} onOrderChange={queryByParams} queryParams={queryParams} />
                        <Pagination links={tools.meta.links} />
                    </section>
                </Authenticated > : <Guest auth={auth}>
                    <Head title="Tools" />
                    <section class="py-6 px-2 lg:px-12 mb-20">
                        <ToolSearch onSearchChanged={queryByParams} queryParams={queryParams} />
                        <ToolsContainer tools={tools.data} categories={categories.data} onOrderChange={queryByParams} queryParams={queryParams} />
                        <Pagination links={tools.meta.links} />
                    </section>
                </Guest>
            }
        </>

    )
}
