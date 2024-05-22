import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react'
import SearchBox from '@/Components/SearchBox';
import ToolsContainer from './Partials/ToolsContainer';

export default function Tools({ auth, tools }) {
    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Tools" />
                    {/* <section class="px-12">
                        <SearchBox />
                        <ToolsContainer tools={toolsObj.data} />
                    </section> */}

                    {/* <pre>
                        <code>
                            {JSON.stringify(tools, null, 2)}
                        </code>
                    </pre> */}

                </Authenticated > : <Guest auth={auth}>
                    <Head title="Tools" />
                    <section class="px-12 mb-20">

                        <SearchBox />
                        <ToolsContainer tools={tools.data} />
                    </section>

                    {/* <pre>
                        <code>
                            {JSON.stringify(tools, null, 2)}
                        </code>
                    </pre> */}

                </Guest>
            }
        </>

    )
}
