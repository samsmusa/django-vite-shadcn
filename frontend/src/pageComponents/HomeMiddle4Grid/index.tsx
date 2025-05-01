import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import GridItem from "@/components/common/GridItem";


interface IProps {
}


const grid_2ItemsData = [
    {
        title: "Up to 70% off | Clearance store",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg",
                label: "",
            },
        ],
        buttonName: "See more",
    },
    {
        title: "Automotive essentials | Up to 60% off",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
                label: "Cleaning Accessories",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
                label: "Tyre & rim care",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
                label: "Helmets",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
                label: "Vacuum cleaner",
            },
        ],
        buttonName: "See more",
    },
    {
        title: "Revamp your home in style",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
                label: "Bedsheets, curtains & more",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
                label: "Home decoration",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg",
                label: "Home storage",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg",
                label: "Lighting solutions",
            },
        ],
        buttonName: "Explore all",
    },

    {
        title: "Up to 70% off | Styles for men",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
                label: "Clothing",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
                label: "Footwear",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
                label: "Watches",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
                label: "Bags & luggage",
            },
        ],
        buttonName: "End of season sale",
    },
];
const HomeComponent: React.FC<IProps> = ({}) => {
    return (
        <>
            {grid_2ItemsData.map((item, index) => (
                <GridItem
                    key={index}
                    title={item.title}
                    images={item.images}
                    buttonName={item.buttonName}
                />
            ))}
        </>
    );
};
const containerId = 'home-middle-4-grid';
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
