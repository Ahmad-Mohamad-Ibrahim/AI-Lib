import { Link, router } from '@inertiajs/react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { UilEdit } from '@iconscout/react-unicons'
import { useState } from 'react';

export default function ChatOption({ chat }) {
    const [optionsShow, setOptionsShow] = useState(false);
    return (
        <div onMouseLeave={() => setOptionsShow(false)} onMouseEnter={() => setOptionsShow(true)} className="flex gap-2 items-center"><Link
            className="bg-primary-primary hover:bg-primary-tint-800 text-white text-sm w-full p-2 rounded-lg
            border-b-1 py-4 border-dashed border-white"
            key={chat.id}
            href={route('chat.show', chat.id)}
        >
            <h5>{chat.name}</h5>
        </Link>

           <div className={"flex-col " + (optionsShow ? '' :'invisible')}>
            <button className="p-1" onClick={() => { router.delete(route('chat.destroy', chat.id)) }} >
                <UilTrashAlt className="text-red-500 w-5" />
            </button>
                <button>
                    <UilEdit className="text-blue-500 w-5" />
                </button>
            </div>
        </div>
    )
}
