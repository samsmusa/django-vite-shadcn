import React, {useEffect, useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import GridItem from "@/components/common/GridItem";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {UI} from "@/interfaces/ui";
import {cn, gridColsMap} from "@/lib/utils";


interface IProps {
}

interface GroupedData {
    [key: number]: UI[];
}



const HomeComponent: React.FC<IProps> = ({}) => {
    const [groupedData, setGroupedData] = useState<GroupedData>({});


    const api = useAxios<PaginatedResponse<UI>>({
        baseURL: `/api/protected/ui/`,
        initialState: {
            loading: false,
            error: null,
            data: {
                count: 0,
                next: null,
                previous: null,
                results: [],
            },
        },
    });

    useEffect(() => {
        api.list("?tag=home8grid").then()
    }, []);

    useEffect(() => {
        if (api?.data?.results?.length) {
            const grouped = api.data.results.reduce((acc: GroupedData, item: UI) => {
                if (!acc[item.row]) {
                    acc[item.row] = [];
                }
                acc[item.row].push(item);
                return acc;
            }, {});

            setGroupedData(grouped);
        }
    }, [api?.data]);

    return (
        <div className="gap-y-3 flex flex-col">
            {Object.keys(groupedData).map((row) => {
                const colCount = groupedData[Number(row)].length;
                return (
                    <div
                        key={row}
                        className={cn('w-full grid gap-4', gridColsMap[colCount] || 'grid-cols-1')}
                    >
                        {groupedData[Number(row)].map((item, index) => (
                            <GridItem key={index} {...item}/>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};
const containerId = 'home-8-grid';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={HomeComponent}
                containerId={containerId}
                propNames={[]}
            />
        </React.StrictMode>
    );
}
