import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import ChatMessage from './ChatMessage';
export default function ChatMessages({ messages, user }) {
    const listRef = useRef(null);
    
    useEffect(() => {
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest', });
    }, []);

    return (
        <div ref={listRef} className="p-8 flex flex-col-reverse gap-6 overflow-y-scroll no-scrollbar">
            {
                messages?.map((message) => {
                    return (
                        <ChatMessage message={message} user={user} key={message.id} />
                    )
                })
            }

        </div>
    )
}
