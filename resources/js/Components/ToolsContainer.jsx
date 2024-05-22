import React from 'react'
import RowsView from '../Pages/Tools/Partials/RowsView';
import GridView from '../Pages/Tools/Partials/GridView';

export default function ToolsContainer({ tools }) {
    let [viewType, setViewType] = React.useState('rows'); // rows or grid
    console.log(tools);

    return (
        <div className="px-2">
            <RowsView tools={tools} />
            {
                // viewType == 'grid' ? <GridView tools={tools} /> : <RowsView tools={tools} />
                
            }
        </div>
    );
}
