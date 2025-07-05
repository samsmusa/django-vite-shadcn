import React, {useEffect} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Separator} from "@radix-ui/react-dropdown-menu";
import {ScrollArea} from "@/components/ui/scroll-area"
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {Cart, IProductReview} from "@/interfaces/product";


interface IProps {
}


const Main: React.FC<IProps> = ({}) => {

    const api = useAxios<Cart>({
        baseURL: `/api/private/cart/view_cart/`,
        initialState: {
            loading: false,
            error: null,
            data: {
                id: 0,
                user: 0,
                session_id: '',
                is_active: false,
                discount: 0,
                created_at: '',
                updated_at: '',
                items: [],
                subtotal: '',
                discount_amount: '',
                total: ''
            },
        },
    });
    useEffect(() => {
        api.get("").then()
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link"><i className="fa-solid fa-cart-shopping"></i></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
                <ScrollArea className="h-72 w-full m-4">
                    {api.data?.items?.map((_) => (
                        <>
                            <div className="flex justify-between space-x-4 px-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/vercel.png"/>
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@nextjs</h4>
                                    <p className="text-sm">
                                        The React Framework – created and maintained by @vercel.
                                    </p>
                                    <div className="flex items-center pt-2">
                                            <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-4"/>
                        </>
                    ))}
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


const containerId = 'nav-cart';
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
