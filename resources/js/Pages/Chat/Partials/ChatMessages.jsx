import React from 'react'
import chatGPTImage from '../../../../images/chatgpt.png';
import Image from '@/Components/Image';
import adminPlaceholder from '../../../../images/admin-placeholder.jpeg';
import placeholder from '../../../../images/placeholder.jpeg';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function ChatMessages({ messages, user }) {
    let userImage = null;
    const listRef = useRef(null);

    // this is to remove the http://localhost:8000/storage/ that is by default there if the output is
    // "" then set userImage = "" or null else you set userImage = user.image
    if (user && user?.image) {
        userImage = !user.image.replace(window.location.protocol + '//' + window.location.host + '/storage/', '') ? "" : user.image;
        console.log(userImage);
    }

    useEffect(() => {
        console.log("scrolling");
        console.log(listRef.current.offsetHeight * messages.length);
        console.log(listRef.current);
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest', });
    }, []);

    return (
        <div ref={listRef} className="p-8 flex flex-col-reverse gap-6 overflow-y-scroll no-scrollbar">
            {
                messages?.map((message) => {
                    return (
                        <div className={" rounded-xl p-4 text-white flex gap-6 items-center w-full " + (message.speaker === 'gpt' ? 'bg-primary-tint-700 flex-row-reverse' : 'bg-primary-shade-100')} >
                            {message.speaker === 'gpt' ? <Image className="w-8 h-8" src={chatGPTImage} alt="chat gpt image" /> :
                                <Image className="h-8 w-8 rounded-full"
                                    src={userImage}
                                    fallback={user?.role === 'admin' ? adminPlaceholder : placeholder} alt="" />}
                            <p>{message.body}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}
