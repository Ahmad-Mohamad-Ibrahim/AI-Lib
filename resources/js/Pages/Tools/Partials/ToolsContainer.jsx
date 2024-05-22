import React from 'react'
import RowsView from './RowsView';
import GridView from './GridView';

export default function ToolsContainer({ tools }) {
    let [viewType, setViewType] = React.useState('rows'); // rows or grid

    return (
        <div className="px-2">
            <RowsView tools={tools} />
            {
                // viewType == 'grid' ? <GridView tools={tools} /> : <RowsView tools={tools} />
                
            }
        </div>
    );
}
