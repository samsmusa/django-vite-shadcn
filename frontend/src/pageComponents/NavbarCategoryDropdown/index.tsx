import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";


interface IHamburgerMenu {
}


const HamburgerMenu: React.FC<HomeProps> = ({IHamburgerMenu, initialData}) => {
    const { isNavOpen, setIsNavOpen } = props;
    return (
        <div
            className={
                isNavOpen
                    ? "flex h-screen w-screen fixed top-0 left-0 translate-x-0 duration-500 z-50"
                    : "flex h-screen w-screen fixed top-0 left-0 -translate-x-full duration-500 z-50"
            }
        >
            <nav className="h-full w-[80%] max-w-[350px] bg-white flex flex-col overflow-auto text-black pb-20">
                <header className="flex flex-col gap-2 px-5 py-4 bg-gray-800 text-white">
                    <p className="user self-end">
                        <Link
                            to={"/sign-in"}
                            className="cursor-pointer flex items-center text-xs gap-1"
                            onClick={() => setIsNavOpen((initialValue) => !initialValue)}
                        >
                            {" "}
                            <span>
                Sign in <i className="fa-solid fa-chevron-right"></i>
              </span>
                            <span>
                <i className="fa-regular fa-user text-xl"></i>
              </span>
                        </Link>
                    </p>
                    <p className="cursor-pointer text-xl w-fit font-semibold">
                        <Link
                            to={"/"}
                            onClick={() => setIsNavOpen((initialValue) => !initialValue)}
                        >
                            {" "}
                            Browse <br />
                            <span className="text-2xl font-normal">Amazon</span>
                        </Link>
                    </p>
                </header>
                <section>
                    <Link
                        to={"/"}
                        onClick={() => setIsNavOpen((initialValue) => !initialValue)}
                    >
                        <li className="cursor-pointer flex justify-between items-center px-5 py-5 text-xl font-bold">
                            <span>Amazon Home</span>
                            <i className="fa-solid fa-house"></i>
                        </li>
                    </Link>
                    <hr className="border-2" />
                    <ul className="flex flex-col">
                        {/* heading */}
                        <li className="px-5 py-3.5 text-xl font-bold">Trending</li>
                        <li className="px-5 py-3.5 cursor-pointer">Best Sellers</li>
                        <li className="px-5 py-3.5 cursor-pointer">New Releases</li>
                        <li className="px-5 py-3.5 cursor-pointer">Movers and Shakers</li>
                    </ul>
                    <hr className="border-2 mt-2" />
                    <ul className="flex flex-col">
                        {/* heading */}
                        <li className="px-5 py-3.5 text-xl font-bold">
                            Top Categories For You
                        </li>
                        <li className="px-5 py-3.5 cursor-pointer">Mobiles</li>
                        <li className="px-5 py-3.5 cursor-pointer">Computers</li>
                        <li className="px-5 py-3.5 cursor-pointer">Books</li>
                        <li className="px-5 py-3.5 cursor-pointer">Amazon Fashion</li>
                        <li className="px-5 py-3.5 cursor-pointer">See All Categories</li>
                    </ul>
                    <hr className="border-2 mt-2" />
                    <ul className="flex flex-col">
                        {/* heading */}
                        <li className="px-5 py-3.5 text-xl font-bold">
                            Programs & Features
                        </li>
                        <li className="px-5 py-3.5 cursor-pointer">Today's Deals</li>
                        <li className="px-5 py-3.5 cursor-pointer">Amazon Pay</li>
                        <li className="px-5 py-3.5 cursor-pointer">Amazon LaunchPad</li>
                        <li className="px-5 py-3.5 cursor-pointer">Try Prime</li>
                        <li className="px-5 py-3.5 cursor-pointer">Sell on Amazon</li>
                        <li className="px-5 py-3.5 cursor-pointer">Style Feed</li>
                    </ul>
                </section>
            </nav>
            <div
                className={
                    isNavOpen
                        ? "h-full flex-1 bg-black/75 text-white text-3xl py-4 text-center delay-500 opacity-100 transition-opacity duration-75 sm:text-start sm:px-4"
                        : "h-full flex-1 bg-black/75 text-white text-3xl py-4 text-center opacity-0 sm:text-start sm:px-4"
                }
                onClick={() => setIsNavOpen((initialValue) => !initialValue)}
            >
                <i className="fa-solid fa-xmark cursor-pointer hover:scale-75 duration-300"></i>
            </div>
        </div>
    );
};


const containerId = 'navbar-category-container';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<CategoryDropdown>
                component={NavbarCategoryDropdown}
                containerId={containerId}
                propNames={[]}
            />
        </React.StrictMode>
    );
}
