import React, {useEffect} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {ProductCategory} from "@/interfaces/product";
import {ScrollArea} from "@/components/ui/scroll-area";

interface IProps {

}

function ItemNav({link, title}: {link: string, title: string}) {
    return <li>
        <a href={link} className="cursor-pointer flex justify-center align-middle font-semibold text-md">
            {title}
        </a>
    </li>;
}

const Main: React.FC<IProps> = ({}) => {

    const {list: categoryList, data: categoryData} = useAxios<PaginatedResponse<ProductCategory>>({
        baseURL: '/api/public/category/',
        initialState: {
            loading: true,
            error: null,
            data: {
                count: 0,
                next: null,
                previous: null,
                results: [],
            },
        },
    });

    useEffect(() => {
        categoryList("").then()
    }, []);

    return (
        <nav
            className="flex items-center gap-x-16 overflow-auto bg-gray-800 px-4 py-2.5 text-sm whitespace-nowrap 2xl:justify-center 2xl:gap-16">

            {/* Hamburger menu (visible only on medium and larger screens) */}
            <div className="hamburger-all cursor-pointer hidden md:block">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ItemNav link={"/products/"} title={"All"} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <ScrollArea className="h-72 w-full">
                            {categoryData?.results?.map((category) => (
                                <DropdownMenuItem className="text-ml cursor-pointer hover-bg-accent">{category.name}</DropdownMenuItem>
                            ))}
                        </ScrollArea>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Main Navbar Items */}
            <ul className="flex items-center gap-x-16">
                <ItemNav link={"/products/"} title={"Amazon Mini TV"} />

                <ItemNav link={"/products/"} title={"Amazon Mini TV"} />
                <ItemNav link={"/products/"} title={"Amazon Mini TV"} />
                <ItemNav link={"/products/"} title={"Amazon Mini TV"} />
                <ItemNav link={"/products/"} title={"Amazon Mini TV"} />
            </ul>
        </nav>
    );
};


const containerId = 'navbar-lower';
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
