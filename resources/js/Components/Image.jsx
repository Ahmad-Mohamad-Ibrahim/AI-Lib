import React from 'react'

export default function Image({ src, fallback = null, ...props }) {
    return (
        <>
            {
                src ? <img src={src} {...props} /> : <img src={fallback} {...props} />
            }
        </>
    )
}
