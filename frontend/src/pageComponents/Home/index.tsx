import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {Button} from "@/components/ui/button";


interface HomeProps {
    username?: string;
    initialData?: any[];
}

const HomeComponent: React.FC<HomeProps> = ({username, initialData}) => {
    return (
        <div className="home-component">
            {username} and {initialData}
            <div className="bg-red-600">Helw</div>
        </div>
    );
};


const containerId = 'home-container';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<HomeProps>
                component={HomeComponent}
                containerId={containerId}
                propNames={['username', 'initialData']}
            />
        </React.StrictMode>
    );
}
