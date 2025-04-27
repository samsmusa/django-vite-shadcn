import {ComponentType} from "react";
import App from "./App.tsx";


export type ComponentProps = Record<string, any>;


export interface PageComponents {
    [componentId: string]: ComponentType<any>;
}


export interface ComponentRegistry {
    [pageName: string]: PageComponents;
}


export const Dashboard = (props: ComponentProps) => <App {...props} />;
export const UserProfile = (props: ComponentProps) => <div>User Profile for {props.username || 'Unknown User'}</div>;
export const ProductList = (props: ComponentProps) => <div>Products
    List {props.category && `in ${props.category}`}</div>;
export const FirstComponent = (props: ComponentProps) => <div>First Component{props?.name}</div>;
export const SecondComponent = (props: ComponentProps) => <div>Second Component{props?.name}</div>;
export const SettingsMain = (props: ComponentProps) => <div>Settings{props?.name}</div>;
export const ProductGrid = (props: ComponentProps) => <div>Products Grid{props?.name}</div>;
export const NotFound = (props: ComponentProps) => <div>Component Not Found{props?.name}</div>;


export const componentRegistry: ComponentRegistry = {

    home: {
        'dashboard-widget': Dashboard,
        'user-profile': UserProfile,
        'product-list': ProductList,
    },


    settings: {
        'first-component': FirstComponent,
        'second-component': SecondComponent,
        'settings-main': SettingsMain,
    },


    products: {
        'product-grid': ProductGrid,

    },


    global: {
        'not-found': NotFound,
    }
};