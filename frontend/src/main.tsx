import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {ComponentProps, componentRegistry} from "./ingest.tsx";


function initializeReactComponents() {

    const pageNameMeta = document.querySelector('meta[name="page-name"]');

    const pageName = pageNameMeta ?
        (pageNameMeta.getAttribute('content') || 'unknown') :
        'unknown';

    console.log(`Initializing React components for page: ${pageName}`);


    const mountPoints = document.querySelectorAll('[data-react-component]');

    if (mountPoints.length === 0) {
        console.warn('No React mount points found on this page');
        return;
    }


    mountPoints.forEach((mountPoint) => {
        const componentId = mountPoint.getAttribute('data-react-component');
        if (!componentId) return;


        const pageComponents = componentRegistry[pageName as keyof typeof componentRegistry] || {};
        const Component = pageComponents[componentId] ||
            componentRegistry.global[componentId] ||
            componentRegistry.global['not-found'];


        const propsString = mountPoint.getAttribute('data-props');
        let props: ComponentProps = {};

        if (propsString) {
            try {
                props = JSON.parse(propsString);
            } catch (e) {
                console.error(`Failed to parse props for ${componentId}:`, e);
            }
        }


        Array.from(mountPoint.attributes)
            .filter(attr => attr.name.startsWith('data-') && attr.name !== 'data-react-component' && attr.name !== 'data-props')
            .forEach(attr => {
                const propName = attr.name
                    .replace('data-', '')
                    .replace(/-([a-z])/g, (_, g) => g.toUpperCase());
                props[propName as keyof ComponentProps] = attr.value;
            });

        try {
            createRoot(mountPoint as HTMLElement).render(
                <StrictMode>
                    <Component {...props} />
                </StrictMode>
            );
            console.log(`Rendered React component: ${componentId} on page: ${pageName}`);
        } catch (error) {
            console.error(`Error rendering React component ${componentId}:`, error);
        }
    });
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeReactComponents);
} else {
    initializeReactComponents();
}


export {initializeReactComponents};