import React from 'react';
import star from '../../images/star.png';
import starEmpty from '../../images/star-empty.png';
import starHalf from '../../images/star-half.png';
import { useEffect, useState } from 'react';

export default function Rating({ rating, className = '' }) {
    let [stars, setStars] = useState([]);
    useEffect(() => {
        let counter = 0;
        let starsCopy = [];
        rating = Math.round(rating * 2) / 2;
        console.log(rating);
        
        while(counter < 5) {
            if(rating > 1) {
                starsCopy.push(1);
            }
            else if(rating === 0.5) {
                starsCopy.push(0.5);
            }
            else {
                starsCopy.push(0);
            }
            
            counter++;
            rating--;
        }

        setStars(starsCopy);
       
    } , []);
  return (
    <div className={"flex items-center gap-2 " + className}>
    {
        stars.map((starVal, index) => {
            return (starVal === 1 ? <img className="max-w-6" key={index}src={star} alt="" /> 
            : starVal === 0.5 ?  <img className="max-w-6" key={index}src={starHalf} alt="" /> 
            : <img className="max-w-6" key={index} src={starEmpty} alt="" />)
        })
    }    
    </div>
  );
}
