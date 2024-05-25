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
                    <h1 className="p-8 my-20 font-bold text-5xl text-center">Create Tool</h1>
                    <section className="px-12 mb-20">
                        <ToolAddForm categories={categories.data} />
                    </section>
                </Authenticated > : <Guest auth={auth}>
                    <Head title="Tools" />
                    <h1 className="p-8 my-20 font-bold text-5xl text-center">Create Tool</h1>
                    <section className="px-12 mb-20">
                        <ToolAddForm categories={categories.data} />
                    </section>
                </Guest>
            }
        </>
    )
}
