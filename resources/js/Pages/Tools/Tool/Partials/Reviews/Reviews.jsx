import React, { forwardRef, useRef } from 'react'
import Review from './Partials/Review'

export default forwardRef(function Reviews({ toolId, className = '', reviews, ...props }, ref) {

  ref = ref ? ref : useRef(null);

  return (
    <div ref={ref} className={'mb-20 ' + className}>
      <div className='overflow-hidden'>
        <div className='flex flex-col gap-2 p-6'>
          {
            reviews.map((review, index) => {
              return <Review review={review} key={index} />
            })
          }
        </div>
      </div>
    </div>
  )

})
