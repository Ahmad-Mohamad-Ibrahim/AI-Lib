import React from 'react'
import ToolRow from './ToolRow';

export default function RowsView({ tools }) {
    React.useEffect(() => {
        console.log("useEffect ran");
        console.log(tools);

    }, []);
    return (
        <>
            {
                tools?.map((tool) => {
                    return <ToolRow tool={tool} key={tool.id} />
                })
            }
        </>
    )
}
