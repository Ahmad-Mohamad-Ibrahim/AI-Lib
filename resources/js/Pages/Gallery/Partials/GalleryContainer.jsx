import Image from '@/Components/Image'
import React from 'react'

export default function GalleryContainer({ images }) {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                images.map(image => <Image src={image.image} />)
            }
        </div>
    )
}
