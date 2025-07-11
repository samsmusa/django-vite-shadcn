import React, {useCallback} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {UI} from "@/interfaces/ui";

interface ImageData {
    imageUrl: string;
    label: string;
}

function CardHead({name}: { name: string }) {
    return <CardHeader className="p-0">
        <h2 className="font-bold text-base md:text-xl whitespace-nowrap overflow-hidden text-ellipsis text-[clamp(12px,_5vw,_24px)]">
            {name}
        </h2>
    </CardHeader>
}

function CardFoot(props: UI) {
    const href = props.dest_url+ "/#"+ props.name;
    return <CardFooter className="p-0">
        <a href={href}>
            <Button variant="link" className="w-fit cursor-pointer text-cyan-800 text-sm hover:text-orange-700">
                see all
            </Button>
        </a>
    </CardFooter>
}


const grid_1ItemsData = [
    {
        title: "Appliances for your home | Up to 55% off",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
                label: "Air conditioners",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
                label: "Refrigerators",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
                label: "Microwaves",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
                label: "Washing machines",
            },
        ],
        buttonName: "See more",
    },
    {
        title: "Prime exclusive offers | Travel tickets",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Flight_186x116._SY116_CB600937888_.jpg",
                label: "Get up to 25% off* on flight tickers",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Train_186x116._SY116_CB600937888_.jpg",
                label: "Zero gateway fees on trains",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Bus_186x116._SY116_CB600937888_.jpg",
                label: "Flat 10% back on bus tickets",
            },
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/SW_186x116._SY116_CB600937888_.jpg",
                label: "Products for your travel needs",
            },
        ],
        buttonName: "See all offers",
    },
    {
        title: "Up to 50% off | Monitor blood sugar",
        images: [
            {
                imageUrl:
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/GW/2023/WK28/PC_CC_Set_379x304_01._SY304_CB601485788_.jpg",
                label: "",
            },
        ],
        buttonName: "Visit the store",
    },
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


export const OneXone: React.FC<UI> = (props) => {
    return <Card
        className="m-0 drop-shadow-none rounded-none p-2 h-full w-full">
        <CardHead name={props.name}/>
        <CardContent className="p-0 grow">
            <img className="w-full object-cover" src={grid_1ItemsData[0].images[0].imageUrl} alt="product"/>
        </CardContent>
        <CardFoot {...props}/>
    </Card>
}

export const FourXfour: React.FC<UI> = (props) => {
    return <Card
        className="m-0 drop-shadow-none rounded-none p-2 border-none h-full w-full">

        <CardHead name={props.name}/>

        <CardContent className="grid grid-cols-2 gap-4 p-0 grow">
            {props?.config?.images?.map((image: {imageUrl: string, label: string}, index: number) => (
                <div key={index} className="space-y-2">
                        <img
                            src={image.imageUrl}
                            alt="product"
                            className="w-full object-cover"
                        />
                    {image.label && (
                        <p className="text-sm text-center">
                            {image.label}
                        </p>
                    )}
                </div>
            ))}
        </CardContent>

        <CardFoot {...props}/>
    </Card>
}
export const TwoXone: React.FC<UI> = ({name}) => {
    return <>
        <Card className=" m-0 drop-shadow-none shadow-none rounded-none p-2 ">

            <CardHead name={name}/>
            <a href="/sign-in">
                <Button
                    variant="outline"
                    color="yellow"
                    className="w-full p-3 md:p-1.5 rounded-lg text-sm duration-200 hover:bg-yellow-400"
                >
                    Sign in securely
                </Button>
            </a>

            <a href="/products-listing-page">
                <div className="relative">
                    <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
                        alt="Sponsored"
                        className="object-cover object-center w-full"
                    />
                    <p
                        className="absolute bottom-[5.5%] right-0 z-30 text-[12px] text-gray-500"
                    >
                        Sponsored
                    </p>
                </div>
            </a>
        </Card>

    </>
}
const GridItem: React.FC<UI> = (props) => {
    const renderComponent = useCallback(() => {
        switch (props.component) {
            case "4x4":
                return <FourXfour {...props} />;
            case "2x1":
                return <TwoXone {...props} />;
            case "1x1":
                return <OneXone {...props} />;
            default:
                return <div>Component not found</div>;
        }
    }, [props]);

    return renderComponent();
}

export default GridItem;