import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput({ className = '', children,...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <select
            {...props}
            className={
                'text-xs lg:text-sm bg-secondary border-primary-shade-500 focus:border-primary focus:ring-primary rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            {children}
        </select>
    );
});
