import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuLabel,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem

} from "@/components/ui/dropdown-menu"
import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu"


interface IProps {
}

type Checked = DropdownMenuCheckboxItemProps["checked"]

const Main: React.FC<IProps> = ({}) => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link"><i className="fa-solid fa-user"></i></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
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
            </DropdownMenuContent>
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
                propNames={[]}
            />
        </React.StrictMode>
    );
}
