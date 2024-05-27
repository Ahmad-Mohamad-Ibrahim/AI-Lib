import { Link } from '@inertiajs/react'
import React from 'react'

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
        {
        links.map((link, index) => {
            return <Link href={link.url || ""}
            className= {
                "inline-block py-2 px-4 rounded-lg text-gray-200 text-xs " + 
                (link.active ? 'bg-primary text-white ' : ' ') +
                (!link.url ? '!text-gray-500 ' : 'hover:bg-primary-tint-800 ')
            }
            dangerouslySetInnerHTML={{__html: link.label}}
            key={index}
            ></Link>
        })
        }
    </nav>
  )
}
