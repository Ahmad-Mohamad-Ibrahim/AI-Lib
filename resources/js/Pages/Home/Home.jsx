import Guest from "@/Layouts/GuestLayout";
import { Head } from '@inertiajs/react';
import AiToolsSection from "./Partials/AiToolsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import HeroSection from "./Partials/HeroSection";

export default function Home({ auth }) {



    return (
        <>
            {
            auth.user ? <Authenticated auth={auth}>
                < Head title="Home" />
                <HeroSection />

                <AiToolsSection />
            </Authenticated> :
                <Guest auth={auth}>
                    <Head title="Home" />
                    <HeroSection />

                    <AiToolsSection />
                </Guest>
            }
        </>

    );
}