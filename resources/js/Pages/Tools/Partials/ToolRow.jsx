import React from 'react';
import { UilLink } from '@iconscout/react-unicons'
import { Link } from '@inertiajs/react';
import Image from '@/Components/Image';

export default function ToolRow({ tool }) {
    let { id, name, website, description, image, rating, category } = tool;

    // if no path image= http://domain.com/storage/{path} with path="" then
    // set image = null
    // console.log(image.replace(window.location.protocol + '//' + window.location.host + '/storage/' , ''));
    image = !image.replace(window.location.protocol + '//' + window.location.host + '/storage/' , '') ? null : image;
    
    return (
        <div className="text-card">
            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-4 lg:justify-between lg:w-full overflow-hidden overflow-ellipsis  mb-8 mt-4">
                <div className="lg:max-w-[22%] lg:w-[22%] flex justify-center items-center p-8 border-2 rounded-lg border-dotted border-white">
                    <Image width="100" className="text-center" src={image} fallback={"assets/img/no-image.png"} alt="No image found" />
                </div>
                <Link href={route('tools.show' , id)}>
                    <h3 className="font-bold text-md lg:text-xl">{name}</h3>
                </Link>
                <a href={website} target="_blank" rel="noreferrer" className="font-medium">
                            Website <UilLink className="inline-block ml-2" />
                </a>
                <div className="flex gap-4">
                    <div className="category">
                        <p>{category.name}</p>
                    </div>
                    <p>Rating {rating}</p>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}
