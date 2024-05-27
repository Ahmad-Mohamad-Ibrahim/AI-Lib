import InputLabel from '@/Components/InputLabel';
import { useRef } from 'react';
import SelectInput from '@/Components/SelectInput';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton';

export default function ChatOptions({ models, preferred }) {
  const optionsForm = useRef(null);
  const { data, setData, post, processing, errors, reset } = useForm({
    model: preferred
  });

  const submit = (e) => {
    e.preventDefault();

    fetch(route('chat.set-option') , {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({model: data.model})
    });
  };
  return (
    <aside class="w-[100%] md:w-[33.3%] bg-primary-shade-600 h-full pl-4">
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

        <PrimaryButton className='mt-8 w-20 items-center justify-center !text-xs h-10'>
          Save
        </PrimaryButton>
      </form>
    </aside>
  )
}
