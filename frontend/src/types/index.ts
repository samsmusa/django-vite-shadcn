// Define component props interfaces
export interface ComponentProps {
    containerId: string;
    [key: string]: any;
}

// Define the global namespace for your React app
export interface MyReactAppGlobal {
    components: {
        [key: string]: React.ComponentType<any>;
    };
    renderComponent: (
        componentName: string,
        containerId: string,
        props?: Record<string, any>
    ) => void;
}

// Extend the Window interface
declare global {
    interface Window {
        MyReactApp: MyReactAppGlobal;
    }
}