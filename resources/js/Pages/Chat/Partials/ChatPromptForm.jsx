import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { UilMessage } from '@iconscout/react-unicons'
import { Head, Link, useForm } from '@inertiajs/react';

export default function ChatPromptForm({current}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        prompt: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('chat.store-message' , current));
        data.prompt = ''; // clear input field
    };

    return (
        <section className="w-full bg-primary max-h-24 rounded-lg px-10 py-4 my-14 text-primary-shade-600">
            <form id="chatPromptForm" className="flex justify-center items-center gap-5" onSubmit={submit}>
                <div>
                    <TextInput
                        id="prompt"
                        type="prompt"
                        name="prompt"
                        value={data.prompt}
                        placeholder="Type your message here..."
                        className="w-full p-2 xl:min-w-[1000px]"
                        isFocused={true}
                        onChange={(e) => setData('prompt', e.target.value)}
                    />

                    <InputError message={errors.prompt} className="mt-2" />
                </div>

                <button form={"chatPromptForm"} disabled={processing} className="rounded-full bg-primary-tint-700 p-5">
                    <UilMessage color="white" />
                </button>
            </form>
        </section>
    );
}
