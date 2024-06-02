import React, { useRef, useState } from 'react';
import SingleToolView from './Partials/SingleToolView/SingleToolView';
import Guest from '@/Layouts/GuestLayout';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Reviews from './Partials/Reviews/Reviews';
import ReviewForm from './Partials/SingleToolView/Partials/ReviewForm';
import { UilAngleDown } from '@iconscout/react-unicons'

export default function Tool({ auth, tool, reviews, error }) {
    // const [formShown, setFormShown] = useState(false);
    const formRef = useRef(null);
    const reviewsRef = useRef(null);

    const toggleEl = (ref) => {
        // apply animation
        ref.current?.classList.toggle('slide-down');
        ref.current?.classList.toggle('slide-up');
    }

    return (
        <>
            {error && <div onClick={() => { success = false }} className="bg-red-600 mb-2 px-4 text-white rounded">{error}</div>}

            {
                auth.user ? <Authenticated auth={auth}>
                    < Head title={`Tool - ${tool.data.name}`} />
                    <SingleToolView tool={tool.data} auth={auth} />

                    <button
                        onClick={() => toggleEl(formRef)}
                        className='w-full inline-block p-8 items-center bg-primary-tint-800'>
                        <div className='flex justify-between'>
                            <h6 className='text-xl lg:text-2xl font-bold'>Post a review</h6>
                            <UilAngleDown color="#ffffff" />
                        </div>
                    </button>

                    <div className='my-8'>
                        <ReviewForm className="slide-down" ref={formRef} toolId={tool.data.id} />
                    </div>

                    <button
                        onClick={() => toggleEl(reviewsRef)}
                        className='w-full inline-block p-8 items-center bg-primary-tint-800'>
                        <div className='flex justify-between'>
                            <h6 className='text-xl lg:text-2xl font-bold'>Reviews</h6>
                            <UilAngleDown color="#ffffff" />
                        </div>
                    </button>
                    <Reviews ref={reviewsRef} className="slide-down" reviews={reviews.data} />

                </Authenticated> :
                    <Guest auth={auth}>
                        <Head title={`Tool - ${tool.data.name}`} />
                        <SingleToolView tool={tool.data} auth={null} />

                        <button
                            onClick={() => toggleEl(reviewsRef)}
                            className='w-full inline-block p-8 items-center bg-primary-tint-800'>
                            <div className='flex justify-between'>
                                <h6 className='text-xl lg:text-2xl font-bold'>Reviews</h6>
                                <UilAngleDown color="#ffffff" />
                            </div>
                        </button>
                        <Reviews ref={reviewsRef} className="slide-down" reviews={reviews.data} />

                    </Guest>
            }
        </>
    )
}
