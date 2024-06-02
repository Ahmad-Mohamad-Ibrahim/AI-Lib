import React, { useState } from 'react'
import star from '../../images/star.png';


export default function RatingInput({ sendRatingValue }) {
    const [ratingValue, setRatingValue] = useState(0);

    return (
        <div className="whitespace-nowrap min-w-[33%] overflow-hidden transition-all">
            <div
                className="inline-block break-words align-top whitespace-normal transition-all h-96 w-96">
                <div
                    className="w-96 h-96 p-5 rounded-3xl text-white flex flex-col gap-8"

                >
                    <div>
                        <img className="max-w-6" src={star} alt="" />
                    </div>
                    <h1 className="text-2xl font-bold">Rating in stars</h1>
                    <p className="text-gray-400 text-sm">
                        Select rating
                    </p>
                    <div className="grid grid-cols-5 gap-5">
                        {[1, 2, 3, 4, 5].map((value) => {
                            return (
                                <div
                                    key={value}
                                    className={`grid place-content-center  h-12 w-12 rounded-full cursor-pointer  transition-all ${value === ratingValue
                                        ? "hover:text-primary-tint-100  text-white bg-primary-tint-900"
                                        : "text-gray-400 hover:bg-white hover:text-primary"
                                        }`}
                                    onClick={() => {
                                        setRatingValue(value);
                                        sendRatingValue(value);
                                    }}
                                >
                                    {value}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}
