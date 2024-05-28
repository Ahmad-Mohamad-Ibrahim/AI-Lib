import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from '@inertiajs/react';
import AiToolsSection from "./Partials/AiToolsSection";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import HeroSection from "./Partials/HeroSection";
import gptLogo from "../../../images/chatgpt.png";

export default function Home({ auth }) {



    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Home" />
                    <HeroSection />

                    <AiToolsSection />

                    <Link href={route('chat.show')}
                        className="fixed bottom-10 animate-bounce right-10 text-white w-64 bg-gpt rounded-lg px-8 py-4 flex items-center gap-2"
                        >
                        Chat with GPT <img className="w-8" src={gptLogo} alt="" />
                    </Link>

                </Authenticated> :
                    <Guest auth={auth}>

                        <Head title="Home" />
                        <HeroSection />

                        <AiToolsSection />

                        <Link href={route('chat.show')}
                            className="fixed bottom-10 animate-bounce right-10 justify-center text-white w-64 bg-gpt rounded-lg px-8 py-4 flex items-center gap-2"
                            >
                            Chat with GPT <img className="w-8"src={gptLogo} alt="" />
                        </Link>

                    </Guest>
            }
        </>

    );
}