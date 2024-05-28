import Authenticated from '@/Layouts/AuthenticatedLayout';
import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import ChatOptions from './Partials/ChatOptions';
import ChatMessages from './Partials/ChatMessages';
import ChatPromptForm from './Partials/ChatPromptForm';
import { useEffect } from 'react';

export default function Chat({ auth, chats, messages, models, preferredModel, currentChat }) {
    console.log(models);
    useEffect(() => {
        document.body.classList.add("no-scrolling");
    } , [])

    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Chat" />
                    <section class="flex h-screen">
                        {/* content goes here */}
                        <ChatOptions chats={chats.data} models={models} preferred={preferredModel} />
                        <div className="flex flex-col justify-end">
                            <ChatMessages messages={messages?.data} user={auth?.user} />
                            <ChatPromptForm current={currentChat} />
                        </div>
                    </section>
                </Authenticated >: ''
            }
        </>
    )
}
