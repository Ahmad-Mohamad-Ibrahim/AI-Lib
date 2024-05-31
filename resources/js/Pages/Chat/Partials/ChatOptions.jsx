import InputLabel from '@/Components/InputLabel';
import { useRef, useState } from 'react';
import SelectInput from '@/Components/SelectInput';
import React from 'react'
import { router } from '@inertiajs/react';
import { UilPlus } from '@iconscout/react-unicons';
import ChatOption from './ChatOption';

export default function ChatOptions({ chats, models, preferred, currentId }) {
  const optionsForm = useRef(null);

  return (
    <aside class="w-[100%] md:w-[40%] bg-primary-shade-600 h-full px-4 py-2 flex flex-col items-center">
        <div className="mt-8">
          <InputLabel htmlFor="model" value="Select Model" />
          <SelectInput
            id="model"
            name="model"
            defaultValue={preferred}
            className="max-w-36"
            onChange={(e) => {
              router.post(route('chat.set-option' , currentId), {model: e.target.value})
            }}
          >
            {
              models?.map((model, index) => {
                return <option value={model.id}>{model.id}</option>
              })
            }
          </SelectInput>
        </div>

      {/* I want a div to display the chat names */}
      <div className="p-2 flex flex-col items-center justify-center gap-2 text-center mt-10 w-full 
      no-scrollbar overflow-x-hidden overflow-y-scroll max-h-60">
        <h4 className="font-bold text-lg my-4">Chats</h4>
        {
          chats?.map((chat) => {
            return <ChatOption chat={chat} key={chat.id} />

          })
        }
      </div>
      <div onClick={(e) => {
        router.post(route('chat.store'));
      }} className="cursor-pointer border-2 py-4 border-dashed border-white p-2 flex flex-col items-center justify-center gap-2 text-center mt-10 w-full">
        <UilPlus />
      </div>
    </aside>
  )
}
