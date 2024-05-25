import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';
import React from 'react';
import TextArea from '@/Components/TextArea';
import Image from '@/Components/Image';
import { useRef } from 'react';
import { UilMultiply } from '@iconscout/react-unicons'
import SelectInput from '@/Components/SelectInput';

export default function ToolAddForm({ categories }) {

    let imageInput = useRef(null);

    const removeUploadedImage = () => {
        setData('image', '');
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        image: '',
        launch_date: '',
        website: '',
        category_id: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('tools.store'), data);
    };



    /*
        name
        description
        image
        launch date
        website link
        category_id (from drop down)
        rating (0) NO NEED
        is_accessible => false
        is_verified => false (until the admin verifies)
    */

    return (
        <section className="w-full md:w-[50%] mx-auto px-2 py-4 my-20 text-primary-shade-600">
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Description" />

                    <TextArea
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('description', e.target.value)}
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="h-52 w-full lg:w-80 flex flex-col justify-between mx-auto gap-1 cursor-pointer 
                p-2 border-2 border-dashed border-white my-8 bg-white rounded-lg"
                >

                    {
                        data.image ? <div className="min-h-48 p-1 border-2 border-dashed border-primary rounded-lg absolute">
                            <UilMultiply onClick={removeUploadedImage} className="bg-primary-tint-400 rounded-lg p-1 w-6 
                            text-white float-end absolute top-2 right-2 z-30" />
                            <Image className="max-h-44 max-w-48 relative" src={URL.createObjectURL(data.image)} alt="Upload Image" />

                        </div> : <div>
                            <div onClick={() => imageInput.current.click()}
                                className="flex justify-center items-center p-8 border-2 border-dashed border-gray-500">
                                <svg className="h-20" xmlns="http://www.w3.org/2000/svg" fill="rgba(75, 85, 99, 1)" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                                <InputLabel className='mx-auto' htmlFor="image" value="Upload Image" />

                            </div>

                            <TextInput
                                id="image"
                                type="file"
                                name="image"
                                value={data.image}
                                ref={imageInput}
                                className="mt-1 w-full text-white invisible"
                                onChange={(e) => setData('image', e.target.files[0])}
                            />
                        </div>
                    }




                    <InputError message={errors.image} className="mt-2" />
                </div>

                <div clasName="mt-4">
                    <InputLabel htmlFor="website" value="Website" />

                    <TextInput
                        id="website"
                        type="text"
                        name="website"
                        value={data.website}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('website', e.target.value)}
                    />

                    <InputError message={errors.website} className="mt-2" />
                </div>

                <div className="md:flex md:items-center md:justify-between">
                    <div className="mt-4">
                        <InputLabel htmlFor="category_id" value="Category" />

                        <SelectInput
                            id="category_id"
                            name="category_id"
                            className="text-white mt-1"
                            value={data.category_id}
                            onChange={(e) => setData('category_id', e.target.value)}
                        >
                            <option value="">Select Category</option>
                            {
                                categories.map((category_id) => {
                                    return (
                                        <option key={category_id.id} value={category_id.id}>
                                            {category_id.name}
                                        </option>
                                    )
                                })
                            }
                        </SelectInput>

                        <InputError message={errors.category_id} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="launch_date" value="Launch Date" />

                        <TextInput
                            id="launch_date"
                            type="date"
                            name="launch_date"
                            value={data.launch_date}
                            className="mt-2 text-white bg-primary"
                            onChange={(e) => setData('launch_date', e.target.value)}
                        />

                        <InputError message={errors.launch_date} className="mt-2" />
                    </div>
                </div>

                <div className="flex items-center justify-end mt-24">

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Publish for review
                    </PrimaryButton>
                </div>
            </form>
        </section>
    )
}
