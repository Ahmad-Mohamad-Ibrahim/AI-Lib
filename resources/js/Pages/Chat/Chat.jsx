import Authenticated from '@/Layouts/AuthenticatedLayout';
import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import ChatOptions from './Partials/ChatOptions';
import ChatMessages from './Partials/ChatMessages';
import ChatPromptForm from './Partials/ChatPromptForm';

export default function Chat({ auth, chats, messages, models, preferredModel, currentChat }) {
    console.log(models);

    return (
        <>
            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title="Chat" />
                    <section class="flex h-screen">
                        {/* content goes here */}
                        <ChatOptions models={models} preferred={preferredModel} />
                        <div className="flex flex-col">
                            <ChatMessages messages={messages?.data} user={auth?.user} />
                            <ChatPromptForm current={currentChat} />
                        </div>
                    </section>
                </Authenticated > : <Guest auth={auth}>
                    <Head title="Chat" />
                    <section class="flex h-screen">
                        {/* content goes here */}
                        <ChatOptions models={models} preferred={preferredModel} />
                        <div className="flex flex-col">
                            <ChatMessages messages={messages?.data} />
                            <ChatPromptForm current={currentChat} />

                        </div>


                    </section>
                </Guest>
            }
        </>
    )
}
