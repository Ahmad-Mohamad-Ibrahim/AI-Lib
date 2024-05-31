import { Head, router } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import GalleryContainer from './Partials/GalleryContainer';

export default function Gallery({ auth, galleryImages }) {
    // const onQuery

    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Gallery" />
                    <section class="py-6 px-2 lg:px-12 mb-20">
                        <GalleryContainer images={galleryImages.data} />
                    </section>
                </Authenticated > : <Guest auth={auth}>
                    <Head title="Tools" />
                    <section class="py-6 px-2 lg:px-12 mb-20">
                        <GalleryContainer images={galleryImages.data} />
                    </section>
                </Guest>
            }
        </>

    )
}
