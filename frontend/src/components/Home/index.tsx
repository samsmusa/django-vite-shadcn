import React from 'react';
import {createRoot} from "react-dom/client";
import {Button} from "@/components/ui/button";

interface HomeProps {
    username?: string;
    initialData?: any[];
}

const HomeComponent: React.FC<HomeProps> = () => {
    const [click, setClick] = React.useState(0);
    return (
        <div className="home-component">
            <div className="content">
                <Button onClick={() => setClick(click + 1)}>Button {click}</Button>
            </div>
        </div>
    );
};

const container = document.getElementById('home-container');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <HomeComponent/>
    </React.StrictMode>
);