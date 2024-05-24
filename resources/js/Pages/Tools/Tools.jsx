import { Head, router } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react'
import ToolsContainer from './Partials/ToolsContainer';
import Pagination from '@/Components/Pagination';
import ToolSearch from './Partials/ToolSearch';

export default function Tools({ auth, categories,  tools, queryParams }) {
    // const onQuery
    queryParams = queryParams ? queryParams : {};
    console.log(queryParams);
    const queryByParams = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route('tools.index') , queryParams);
    }
    return (
        <>
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
