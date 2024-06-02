import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'rounded-md px-3 py-2 text-sm font-medium ' +
                (active ? 'bg-primary-shade-400 text-white': 'text-white hover:bg-primary-tint-700 hover:text-white') +
                className
            }
            aria-current="page"
        >
            {children}
        </Link>
    );
}
