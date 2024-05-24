import React from 'react'
import ToolRow from './ToolRow';

export default function RowsView({ tools }) {
    return (
        <>
            <div className="flex flex-col gap-10 py-6 px-2 md:p-6 border-l-2 border-r-2 border-secondary">
                {
                    tools?.map((tool) => {
                        return <ToolRow tool={tool} key={tool.id} />

                    })
                }
            </div>
        </>
    )
}
