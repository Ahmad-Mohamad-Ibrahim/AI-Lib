import React from 'react';
import { UilLink } from '@iconscout/react-unicons';
import Image from '@/Components/Image';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import { router } from '@inertiajs/react';

export default function SingleToolView({ tool, auth }) {
    let { id, name, website, description, image, rating, category } = tool;

    image = !image.replace(window.location.protocol + '//' + window.location.host + '/storage/', '') ? null : image;
    console.log(image);
    return (
        <>
            <section className="flex flex-col gap-8 my-20 px-8">
                <div className="flex flex-row items-start justify-evenly">
                    <Image height="100" width="100" className="text-center" src={image}
                        fallback={`${window.location.protocol}//${window.location.host}/assets/img/no-image.png`} alt="No image found" />
                    <h1 className="font-bold text-3xl">{name}</h1>
                    <a href={website}>
                        Visit Website<UilLink className="inline-block ml-2" />
                    </a>
                </div>
                <p>
                    {description}
                </p>
                <div class="flex flex-row justify-evenly items-center">
                    <p className="font-bold">Rating: {rating}</p>
                    <div className="category">
                        <p>
                            {category.name}
                        </p>
                    </div>
                </div>

                {auth?.user.role === 'admin' && <div className="flex justify-center gap-12 items-center">

                        {!tool.is_verified && <PrimaryButton onClick={() => { router.put(route('tools.verify', id)) }}>Verify</PrimaryButton>}

                        <DangerButton onClick={() => { router.delete(route('tools.destroy', id)) }}>Delete</DangerButton>
                    </div>
                }
            </section>
        </>
    )
}
