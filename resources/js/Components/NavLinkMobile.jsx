import { Link } from '@inertiajs/react';
import React from 'react'

export default function NavLinkMobile({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'block rounded-md px-3 py-2 text-base font-medium' +
                (active
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary-tint-700 hover:text-white') +
                className
            }
            aria-current="page"
        >
            {children}
        </Link>
    );
}
