import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextArea({ type = 'text', className = '', isFocused = false,minHeight = 100, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm min-h-[${minHeight}px] ` +
                className
            }
            ref={input}
        ></textarea>
    );
});
