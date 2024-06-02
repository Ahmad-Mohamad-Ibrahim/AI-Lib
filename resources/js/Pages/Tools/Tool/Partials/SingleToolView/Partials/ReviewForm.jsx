import PrimaryButton from '@/Components/PrimaryButton';
import RatingInput from '@/Components/RatingInput';
import TextArea from '@/Components/TextArea'
import { useForm } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react';
import React, { forwardRef, useRef } from 'react'

export default forwardRef(function ReviewForm({ toolId, className = '', ...props }, ref) {

    ref = ref ? ref : useRef(null);


    const { data, setData, post, processing, errors, reset } = useForm({
        body: '',
        rating: 0,
    });

    // const submit = (e) => {
    //     e.preventDefault();

    // //     post(route('reviews.store'));
    // };

    return (
        <div ref={ref} className={'px-6 ' + className}>
            <form className='overflow-hidden' onSubmit={(e) => e.preventDefault()}>
                <div className='flex gap-2'>
                    <TextArea
                        placeholder="Write your review here..."
                        minHeight={50}
                        id="body"
                        name="body"
                        value={data.body}
                        className="mt-1 block w-full text-primary max-h-[288px]"
                        onChange={(e) => setData('body', e.target.value)}
                    />
                    <RatingInput sendRatingValue={(value) => setData('rating', value)} />
                </div>

                <PrimaryButton
                    onClick={() => {
                        // console.log({...data, 'ai_tool_id': toolId});
                        setData('rating', 0);
                        setData('body', '');
                        router.post(route('reviews.store'), { ...data, 'ai_tool_id': toolId });
                    }}
                    className="ml-auto inline-block mr-16 " disabled={processing}>
                    Post Review
                </PrimaryButton>
            </form>

        </div>
    )
})
