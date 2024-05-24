import React from 'react'
import ToolCell from './ToolCell'

export default function GridView({ tools }) {
  return (
    <>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 py-6 px-2 md:p-6 border-l-2 border-r-2 border-secondary">
        {
          tools?.map((tool) => {
            return <ToolCell tool={tool} key={tool.id} />

          })
        }
      </div>
    </>
  )
}
