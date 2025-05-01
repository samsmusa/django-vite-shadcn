import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import Slider from "@/components/common/Slider";


interface IProps {
}

const images = [
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
];

const Main: React.FC<IProps> = ({}) => {
    return (
        <Slider images={images}/>
    );
};
const containerId = 'home-nav-slider';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={[]}
            />
        </React.StrictMode>
    );
}
