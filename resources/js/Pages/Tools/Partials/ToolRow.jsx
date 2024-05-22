import React from 'react'

export default function ToolRow({ tool }) {
    let { id, name, website, description, image, rating, category } = tool;
    console.log(tool);
    return (
        <div class="flex gap-2 mb-8 mt-4">
            <div class="max-w-[22%] w-[22%] flex justify-center items-center p-8 border-2 rounded-lg border-dotted border-white">
                <img class="text-center" src={image} alt="No image found" />
            </div>

            <div class="flex flex-col gap-8 text-card w-full">
                <a href="">
                    <h3 className="font-bold text-xl">{name}</h3>
                </a>
                <div class="flex">
                    <p>{description}</p>
                    <a href={website} target="_blank" rel="noreferrer">{website}</a>
                </div>
                <div class="flex">
                    <p>Category : {category.name}</p>
                    <p>Rating : {rating}</p>
                </div>
            </div>
        </div>
    )
}
