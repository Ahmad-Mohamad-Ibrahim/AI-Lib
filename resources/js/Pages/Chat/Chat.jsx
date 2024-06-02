import Authenticated from '@/Layouts/AuthenticatedLayout';
import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import ChatOptions from './Partials/ChatOptions';
import ChatMessages from './Partials/ChatMessages';
import ChatPromptForm from './Partials/ChatPromptForm';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';

export default function Chat({ auth, chats, messages, models, preferredModel, currentChat, cached , error = null }) {
    console.log(models);
    useEffect(() => {
        document.body.classList.add("no-scrolling");

        return () => {
            document.body.classList.remove("no-scrolling");
        }
    } , [])

    return (
        <>
            {
                auth.user && <Authenticated auth={auth}>
                    < Head title="Chat" />
                    <section class="flex h-screen">
                        {/* content goes here */}
                        <ChatOptions currentId={currentChat} chats={chats.data} models={models} preferred={preferredModel} />
                        <div className="flex flex-col justify-end">
                            <ChatMessages cached={cached} messages={messages?.data} user={auth?.user} />
                            {error && <InputError message={error} className='text-xl p-2 bg-red-600 text-white rounded-lg ml-2 mr-auto' /> }
                            <ChatPromptForm current={currentChat} />
                        </div>
                    </section>
                </Authenticated >
            }
        </>
    )
}
