import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import Banner from "@/components/common/Banner";
import {Banner as IBanner} from "@/interfaces/ui";


interface IProps {
    config: IBanner;
}


const Main: React.FC<IProps> = ({config}) => {
    return (
        <div className="w-full space-y-3">
            {config?.banner && <Banner banner={config.banner}/>}
        </div>
    );
};
const containers = document.querySelectorAll('[id^="banner-"]');

if (containers) {
    containers.forEach(container => {
        const containerId = container.id;

        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <Hydrate<IProps>
                    component={Main}
                    containerId={containerId}
                    propNames={["config"]}
                />
            </React.StrictMode>
        );
    });
}
