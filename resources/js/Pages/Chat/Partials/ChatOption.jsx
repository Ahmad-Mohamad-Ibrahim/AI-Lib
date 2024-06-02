import { Link, router } from '@inertiajs/react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { UilEdit } from '@iconscout/react-unicons';
import { useEffect, useRef, useState } from 'react';
import TextInput from '@/Components/TextInput';

export default function ChatOption({ chat }) {
    const { id, name } = chat;
    const [optionsShow, setOptionsShow] = useState(false);
    const [editFormShown, setEditFormShown] = useState(false);
    const inputRef = useRef(null);

    const toggleEditForm = () => {
        setEditFormShown(!editFormShown);
        if(editFormShown)
            inputRef.current.focus();
    }

    useEffect(() => {
        if (editFormShown) {
            toggleEditForm();
        }
    }, []);

    


    return (
        <div
            onMouseLeave={() => setOptionsShow(false)} onMouseEnter={() => setOptionsShow(true)}
            className="flex gap-2 items-center bg-primary-primary hover:bg-primary-tint-800 text-white text-sm w-full p-1 rounded-lg
        border-b-1 py-2 border-dashed border-white">

            <div
                className='min-w-36'>
                {editFormShown ? <TextInput
                    isFocused={editFormShown}
                    defaultValue={name}
                    ref={inputRef}
                    type="text"
                    name="name"
                    className="mt-1 block w-full text-primary"
                    onKeyDown={(e) => {
                        if (e.key !== 'Enter') {
                            return;
                        }
                        router.patch(route('chat.update', id), { name: e.target.value });
                        toggleEditForm();
                    }} />
                    : <Link href={route('chat.show', id)}>{name}</Link>}
            </div>

            <div className={"flex flex-col items-center " + (optionsShow ? '' : 'invisible')}>
                <button className="p-1" onClick={() => { router.delete(route('chat.destroy', chat.id)) }} >
                    <UilTrashAlt className="text-red-500 w-5" />
                </button>
                <button onClick={toggleEditForm}>
                    <UilEdit className="text-blue-500 w-5" />
                </button>
            </div>
        </div>
    )
}
