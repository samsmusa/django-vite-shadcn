import React, {useEffect, useState} from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {createRoot} from "react-dom/client";
import {Hydrate} from "@/lib/Hydrate";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import clsx from "clsx";

interface IProps {
    cart_id: string;
}

export interface CartItem {
    id: number;
    cart: number;
    product: Product;
    variant: ProductVariant;
    quantity: number;
    created_at: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    sku: string;
    brand: number;
    category: number;
    short_description: string;
    price: string;
    compare_price: string | null;
    is_on_sale: boolean;
    discount_percentage: number;
    images: number[];
}

export interface ProductVariant {
    id: number;
    name: string;
    sku: string;
    price: number;
    stock_quantity: number;
    is_active: boolean;
    image: string | null;
    attribute_values: string[];
}

export interface Address {
    id: number;
    address_type: 'billing' | 'shipping';
    is_default: boolean;
    full_name: string;
    address_line1: string;
    address_line2: string | null;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    phone_number: string;
    user: number;
}

const AddressCard: React.FC<{}> = (props) => {
    const api = useAxios<PaginatedResponse<Address>>({
        baseURL: `/api/private/address/?address_type=shipping`,
        initialState: {
            loading: false,
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
        api.list('').catch((e) => {
            console.error('Failed to fetch carts', e);
        });
    }, []);
    return (
        <div className="my-10 ">
            <p className="text-xl font-medium">Address Details</p>
            <p className="text-gray-400">Complete your order by providing your Address details.</p>
            {
                api.data?.results?.map((e) =>
                    <div key={e.id}
                         className="relative rounded-lg border border-gray-300 p-5 shadow-sm hover:shadow-md transition">
                        <input
                            className="peer hidden"
                            id={`radio_address_${e.id}`}
                            type="radio"
                            name="address"
                            value={e.id}
                        />
                        <span
                            className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>

                        <label
                            htmlFor={`radio_address_${e.id}`}
                            className="peer-checked:bg-gray-50 flex flex-col gap-2 cursor-pointer"
                        >
                            <div className="flex items-center gap-2 text-gray-800 font-medium text-lg">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>{e.full_name}</span>
                                {e.is_default && (
                                    <span
                                        className="ml-1 text-xs bg-gray-700 text-white px-2 py-0.5 rounded-full">
                                          Default
                                        </span>
                                )}
                            </div>

                            <div className="text-sm text-gray-600 flex gap-2 items-start">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>
                {e.address_line1}, {e.address_line2 && `${e.address_line2}, `}
                                    {e.city}, {e.state}, {e.country} - {e.postal_code}
              </span>
                            </div>

                            <div className="text-sm text-gray-600 flex gap-2 items-center">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>{e.phone_number}</span>
                            </div>
                        </label>
                    </div>)
            }
        </div>
    )
}
const PaymentCard: React.FC<{}> = () => {
    const [method, setMethod] = useState<'cod' | 'online'>('cod');

    return (
        <div className="my-5 lg:mt-0">
            <div className="mb-5 grid gap-6">
                {/* Cash on Delivery */}
                <div className="relative">
                    <input
                        className="peer hidden"
                        id="radio_cod"
                        type="radio"
                        name="payment_method"
                        checked={method === 'cod'}
                        onChange={() => setMethod('cod')}
                    />
                    <span
                        className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        htmlFor="radio_cod"
                    >
                        <img className="w-14 object-contain" src="/static/assets/4775436-min.jpg" alt="Cash"/>
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">Cash on Delivery</span>
                            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                        </div>
                    </label>
                </div>

                {/* Online Payment */}
                <div className="relative">
                    <input
                        className="peer hidden"
                        id="radio_online"
                        type="radio"
                        name="payment_method"
                        checked={method === 'online'}
                        onChange={() => setMethod('online')}
                    />
                    <span
                        className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        htmlFor="radio_online"
                    >
                        <img className="w-14 object-contain" src="/static/assets/4142132-min.jpg" alt="Online"/>
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">Online Payment</span>
                            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                        </div>
                    </label>
                </div>
            </div>

            {/* Conditional Payment Form */}
            <div
                className={clsx(
                    "transition-all duration-500 overflow-hidden",
                    method === "online"
                        ? "max-h-[1000px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">Complete your order by providing your payment details.</p>

                <p className="mt-6 text-sm font-medium text-gray-600">Select Payment Method</p>
                <div className="mt-2 flex gap-6">
                    <label className="inline-flex items-center gap-2">
                        <input
                            type="radio"
                            name="paymentOption"
                            value="bkash"
                            defaultChecked={true}
                            className="form-radio text-pink-500"
                        />
                        <span>bKash</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                        <input
                            type="radio"
                            name="paymentOption"
                            value="nagad"
                            className="form-radio text-yellow-500"
                        />
                        <span>Nagad</span>
                    </label>
                </div>

                <label htmlFor="transactionId" className="mt-4 mb-2 block text-sm font-medium">Transaction ID</label>
                <input
                    type="text"
                    id="transactionId"
                    name="transactionId"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your transaction ID"
                />
            </div>
        </div>
    );
};

const ProductCard: React.FC<CartItem> = (props) => {
    return (<div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center"
             src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
             alt=""/>
        <div className="flex w-full flex-col px-4 py-4">
            <span className="font-semibold">{props?.product?.name}</span>
            <span className="float-right text-gray-400">42EU - 8.5US</span>
            <p className="text-lg font-bold">$138.99</p>
        </div>
    </div>)
}

const PriceCard: React.FC<{ price: number }> = (props) => {
    return (
        <>
            <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                    <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Shipping</p>
                    <p className="font-semibold text-gray-900">$8.00</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">{props?.price}</p>
            </div>
        </>
    )
}

const Main: React.FC<IProps> = ({cart_id}) => {
    const [data, setData] = useState<CartItem[]>([]);

    const api = useAxios<PaginatedResponse<CartItem>>({
        baseURL: `/api/private/cart/${cart_id}/items/`,
        initialState: {
            loading: false,
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
        api.list('').catch((e) => {
            console.error('Failed to fetch carts', e);
        });
    }, []);


    return (
        <>

            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 h-screen">
                <div className="p-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {
                            api?.data?.results?.map((e) => <ProductCard {...e}  />)
                        }
                    </div>

                    <AddressCard/>
                </div>

                <div className="">

                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <PaymentCard/>
                    <PriceCard price={123}/>
                </div>
            </div>
        </>
    );
}

const containerId = 'checkout-page';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={["cart_id"]}
            />
        </React.StrictMode>
    );
}