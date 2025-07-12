import React from 'react';

export type HydrateProps<T> = {
    component: React.ComponentType<T>;
    containerId: string;
    propNames: Array<keyof T>;
};

export function Hydrate<T extends object>({component: Component, containerId, propNames}: HydrateProps<T>) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const props = propNames.reduce<Partial<T>>((acc, key) => {
        const raw = container.getAttribute(`data-${String(key).replace("_", '-')}`);
        try {
            if (raw) {
                if (raw.startsWith('{') || raw.startsWith('[')) {
                    const fixedCnf = raw.replace(/'/g, '"');
                    acc[key] = JSON.parse(fixedCnf) as any;
                } else {
                    acc[key] = raw as any;
                }
            }
        } catch (err) {
            console.warn(`Failed to parse prop "${String(key)}":`, err);
            acc[key] = raw as any;
        }
        return acc;
    }, {});


    return <Component {...props as T} />;
}