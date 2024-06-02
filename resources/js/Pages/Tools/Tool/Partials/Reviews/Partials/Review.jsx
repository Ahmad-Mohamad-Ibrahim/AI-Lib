import Image from '@/Components/Image';
import Rating from '@/Components/Rating'
import React from 'react';
import adminPlaceholder from "../../../../../../../images/admin-placeholder.jpeg";
import userPlaceholder from "../../../../../../../images/placeholder.jpeg";

export default function Review({ review }) {

    const { body, rating, user } = review;
    let userImage = null;
    
    if (user && user?.image) {
        userImage = !user.image.replace(window.location.protocol + '//' + window.location.host + '/storage/', '') ? "" : user.image;
    }
    return (
        <div className='bg-primary-tint-500 rounded-lg p-8'>
            <div className='flex gap-2 mb-8'>
                <h6>{user.name}</h6>
                <Image className="h-8 w-8 rounded-full" src={userImage} fallback={user.role == 'admin' ? adminPlaceholder : userPlaceholder} />
            </div>
            <div className='flex justify-start bg-primary-tint-600 p-8 rounded-lg '>

                <div className='w-[70%]'>{body}</div>
                <Rating rating={rating} />
            </div>
        </div>
    )
}
