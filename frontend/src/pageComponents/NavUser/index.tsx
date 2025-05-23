import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"


interface IProps {
    is_authenticated: string
}


const Main: React.FC<IProps> = ({is_authenticated}) => {
    const login = (String(is_authenticated).toLowerCase() === 'true');
    console.log(login, is_authenticated);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link"><i className="fa-solid fa-user"></i></Button>
            </DropdownMenuTrigger>
            {
                login ? <>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <a href="/account">Profile</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="/account">Billing</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="/account">Settings</a>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent></> : <><DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <a href="/login">Login</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a href="/signup">Sign Up</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent></>
            }
        </DropdownMenu>
    )
}


const containerId = 'nav-user';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={["is_authenticated"]}
            />
        </React.StrictMode>
    );
}
