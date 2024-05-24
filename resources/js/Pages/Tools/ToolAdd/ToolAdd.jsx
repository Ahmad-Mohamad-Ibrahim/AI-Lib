import React from 'react'
import ToolAddForm from './Partials/ToolAddForm'
import { Head } from '@inertiajs/react'
import Guest from '@/Layouts/GuestLayout'
import Authenticated from '@/Layouts/AuthenticatedLayout'

export default function ToolAdd({ auth, categories }) {
    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Publish Tool" />
                    <section class="px-12 mb-20">
                        <ToolAddForm />
                    </section>
                </Authenticated > : <Guest auth={auth}>
                    <Head title="Tools" />
                    <section class="px-12 mb-20">
                        <ToolAddForm />
                    </section>
                </Guest>
            }
        </>
    )
}
