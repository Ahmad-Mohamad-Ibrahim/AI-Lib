import React from 'react'
import RowsView from './RowsView';
import GridView from './GridView';
import { UilApps } from '@iconscout/react-unicons';
import { UilLineSpacing } from '@iconscout/react-unicons';
import SelectInput from '@/Components/SelectInput';

export default function ToolsContainer({ tools, categories, onOrderChange, queryParams }) {
    let [viewType, setViewType] = React.useState('rows'); // rows or grid
    // console.log(queryParams);

    React.useEffect(() => {
        let storedViewType = window.localStorage.getItem('viewType');
        if (!storedViewType) {
            window.localStorage.setItem('viewType', 'rows');
        } else {
            setViewType(storedViewType);
        }
    }, []);

    React.useEffect(() => {
        window.localStorage.setItem('viewType', viewType);
    }, [viewType]);

    const changeViewTo = (type) => {
        if (viewType !== type) {
            setViewType(type);
        }
    }

    return (
        <div className="my-20">
            <div className="flex justify-end gap-8 items-center min-h-[100px] bg-secondary rounded-t-3xl">
                <div className="flex flex-col md:flex-row gap-2 md:gap-2 justify-end max-w-[46%] md:w-[100%]">
                    <SelectInput className="ml-8" defaultValue={queryParams.category} onChange={(e) => { onOrderChange('category', e.target.value) }}>
                        <option className="w-[20px] overflow-hidden" value="">Category</option>
                        {
                            categories.map((category) => {
                                return <option value={category.id}>{category.name}</option>
                            })
                        }
                    </SelectInput>

                    <SelectInput className="ml-8" defaultValue={queryParams.orderBy} onChange={(e) => { onOrderChange('orderBy', e.target.value) }}>
                        <option className="w-[30%]" value="">Order By</option>
                        <option className="w-[30%]" value="launch_date">Launch Date</option>
                        <option className="w-[30%]" value="rating">Rating</option>
                    </SelectInput>
                </div>

                {/* grid view */}
                <button onClick={(e) => { changeViewTo('grid') }} className={`p-2 rounded-lg ${viewType == 'grid' ? 'bg-primary-shade-400' : ''}`}>
                    <UilApps />
                </button>

                {/* rows view */}
                <button onClick={(e) => { changeViewTo('rows') }} className={`mr-6 lg:mr-20 p-2 rounded-lg ${viewType == 'rows' ? 'bg-primary-shade-400' : ''}`}>
                    <UilLineSpacing />
                </button>

            </div>
            <div>
                {
                    viewType == 'grid' ? <GridView tools={tools} /> : <RowsView tools={tools} />
                }
            </div>
            <div className="min-h-[60px] bg-secondary rounded-b-3xl">
            </div>
        </div>
    );
}
