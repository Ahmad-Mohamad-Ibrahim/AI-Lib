import InputLabel from '@/Components/InputLabel';
import { useRef, useState } from 'react';
import SelectInput from '@/Components/SelectInput';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton';
import { router } from '@inertiajs/react';
import { UilPlus } from '@iconscout/react-unicons';
import ChatOption from './ChatOption';

export default function ChatOptions({ chats, models, preferred }) {
  const optionsForm = useRef(null);
  

  const { data, setData, post, processing, errors, reset } = useForm({
    model: preferred
  });

  console.log(chats);
  const submit = (e) => {
    e.preventDefault();

    fetch(route('chat.set-option'), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ model: data.model })
    });
  };
  return (
    <aside class="w-[100%] md:w-[40%] bg-primary-shade-600 h-full px-4 py-2 flex flex-col items-center">
      <form method="post" ref={optionsForm} onSubmit={submit}>
        <div className="mt-8">
          <InputLabel htmlFor="model" value="Select Model" />
          <SelectInput
            id="model"
            name="model"
            value={data.model}
            className="max-w-36"
            onChange={(e) => {
              setData('model', e.target.value);
            }}
          >
            {
              models?.map((model, index) => {
                return <option value={model.id}>{model.id}</option>
              })
            }
          </SelectInput>
        </div>

        <PrimaryButton className='mt-8 mx-auto w-20 items-center justify-center !text-xs h-10'>
          Save
        </PrimaryButton>
      </form>

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
