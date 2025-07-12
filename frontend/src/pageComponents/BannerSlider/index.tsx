import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {Banners} from "@/interfaces/ui";
import BannerSlider from "@/components/common/BannerSlider";


interface IProps {
    config: Banners;
}


const Main: React.FC<IProps> = ({config}) => {
    console.log("banners config", config);
    return (
        <div className="w-full space-y-3">
            {config?.banners && <BannerSlider banners={config.banners}/>}
        </div>
    );
};
const containers = document.querySelectorAll('[id^="banners-slider-"]');

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
