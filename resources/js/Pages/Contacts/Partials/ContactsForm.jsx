import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react'

export default function ContactsForm({ user, className = ' '}) {
    if(! user) {
        user = {'name' : '','email':''};
    }
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        body: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('contact.store'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg md:text-2xl font-medium text-white">Contact Us</h2>

                <p className="mt-1 text-sm text-gray-300">
                    Upload Image
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6 text-primary">

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <TextArea
                        id="body"
                        name="body"
                        value={data.body}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('body', e.target.value)}
                    />

                <div className="flex justify-end items-center gap-4">
                    <PrimaryButton disabled={processing}>Send</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    )
}
