import Guest from "@/Layouts/GuestLayout";
import { Head } from '@inertiajs/react';
import AiToolsSection from "./Partials/AiToolsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import HeroSection from "./Partials/HeroSection";

export default function Home({ isAuth }) {



    return (
        <>
            {
            isAuth ? <Authenticated>
                < Head title="Home" />
                <HeroSection />

                <AiToolsSection />
            </Authenticated > :
                <Guest>
                    <Head title="Home" />
                    <HeroSection />

                    <AiToolsSection />
                </Guest>
            }
        </>

    );
}