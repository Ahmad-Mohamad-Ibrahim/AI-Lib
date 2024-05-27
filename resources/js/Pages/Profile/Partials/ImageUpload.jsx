
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import Image from '@/Components/Image';
import adminPlaceholder from '../../../../images/admin-placeholder.jpeg';
import placeholder from '../../../../images/placeholder.jpeg';
import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

export default function ImageUpload({ className = '' }) {
    const user = usePage().props.auth.user;
    const imageInput = useRef();

    let userImage = null;

    if (user && user?.image) {
        userImage = !user.image.replace(window.location.protocol + '//' + window.location.host + '/storage/', '') ? "" : user.image;
    }
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        image: '',
    });


    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('profile.updateImage'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-white">Profile Image</h2>

                <p className="mt-1 text-sm text-gray-300">
                    Upload Image
                </p>
            </header>

            <form encType="multipart/form-data" onSubmit={submit} className="mt-6 space-y-6 flex items-center text-primary">

                <div className="cursor-pointer">
                    <Image
                        onClick={(e) => imageInput.current.click()}
                        className="w-52 h-52 rounded-full text-white"
                        fallback={user.role === 'admin' ? adminPlaceholder : placeholder}
                        src={data.image ? URL.createObjectURL(data.image) : userImage}
                    />
                    <InputLabel className='mx-auto' htmlFor="image" />

                    <TextInput
                        id="image"
                        type="file"
                        name="image"
                        defaultValue={data.image}
                        ref={imageInput}
                        className="mt-1 w-full text-white invisible"
                        onChange={(e) => setData('image', e.target.files[0])}
                    />

                    <InputError message={errors.image} className="mt-2" />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Upload</PrimaryButton>

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
    );
}
