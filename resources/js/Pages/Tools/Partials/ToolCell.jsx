import React from 'react';
import { UilLink } from '@iconscout/react-unicons'
import { Link } from '@inertiajs/react';
import Image from '@/Components/Image';

export default function ToolCell({ tool }) {
    let { id, name, website, description, image, rating, category } = tool;

    // if no path image= http://domain.com/storage/{path} with path="" then
    // set image = null
    image = !image.replace(window.location.protocol + '//' + window.location.host + '/storage/' , '') ? "" : image;
    
    return (
        <div className="text-card text-center">
            <div className="flex flex-col items-center gap-8 lg:justify-between lg:w-full overflow-hidden overflow-ellipsis  mb-8 mt-4">
                <div className="flex justify-center items-center p-2 md:p-8 border-2 rounded-lg border-dotted border-white">
                    <Image className="text-center w-16 md:w-32" src={image} fallback={"assets/img/no-image.png"} alt="No image found" />
                </div>

                <Link href={route('tools.show' , id)}>
                    <h3 className="font-bold text-sm md:text-xl">{name}</h3>
                </Link>
                <a class="flex flex-nowrap w-full justify-center" href={website} target="_blank" rel="noreferrer" className="font-medium">
                    Website<UilLink className="inline-block ml-2" />
                </a>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="category">
                        <p>{category.name}</p>
                    </div>
                    <p>Rating {rating}</p>
                </div>
            </div>
            <div className="max-h-[60px] lg:max-h-[100%] overflow-hidden overflow-ellipsis">
                <p>{description}</p>
            </div>
        </div>
    )
}
