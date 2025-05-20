import React, {useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {SubmitHandler, useForm} from "react-hook-form";


interface IProps {
}

type AddressFormData = {
    full_name: string;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    phone_number: string;
    is_default: boolean;
};

interface EditableAddressProps {
    id: string | number;
    type: "billing" | "shipping";
    iconClass: string;
    label: string;
    defaultValues: AddressFormData;
}

const EditableAddress: React.FC<EditableAddressProps> = ({
                                                             id,
                                                             type,
                                                             iconClass,
                                                             label,
                                                             defaultValues,
                                                         }) => {
    const [isEditing, setIsEditing] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<AddressFormData>({
        defaultValues,
    });

    const onSubmit: SubmitHandler<AddressFormData> = async (data) => {
        try {
            const response = await fetch(`/api/private/address/${id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...data, address_type: type}),
            });

            if (!response.ok) {
                throw new Error("Failed to update address");
            }

            const result = await response.json();
            console.log("Address updated:", result);
            setIsEditing(false);
            reset(data); // refresh form values
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="group">
            <dt className="font-semibold flex justify-start items-center text-gray-900 dark:text-white relative">
                {label}
                <span
                    className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ml-2"
                    onClick={() => setIsEditing((prev) => !prev)}
                >
          <i className="fas fa-edit cursor-pointer"></i>
        </span>
            </dt>

            {isEditing ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-700 dark:text-white">
                    <input {...register("full_name")} placeholder="Full Name" className="border p-1 rounded"/>
                    <input {...register("address_line1")} placeholder="Address Line 1" className="border p-1 rounded"/>
                    <input {...register("address_line2")} placeholder="Address Line 2" className="border p-1 rounded"/>
                    <input {...register("city")} placeholder="City" className="border p-1 rounded"/>
                    <input {...register("state")} placeholder="State" className="border p-1 rounded"/>
                    <input {...register("country")} placeholder="Country" className="border p-1 rounded"/>
                    <input {...register("postal_code")} placeholder="Postal Code" className="border p-1 rounded"/>
                    <input {...register("phone_number")} placeholder="Phone Number" className="border p-1 rounded"/>

                    <div className="col-span-2 flex justify-end gap-2 mt-2">
                        <button type="button" onClick={() => setIsEditing(false)} className="text-sm text-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="text-sm bg-blue-600 text-white px-3 py-1 rounded">
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mt-1">
                    <i className={iconClass}></i>
                    {`${defaultValues.address_line1}, ${defaultValues.city}, ${defaultValues.country}`}
                </dd>
            )}
        </form>
    );
};

const DeliveryAddress = () => (
    <EditableAddress
        id="123" // Replace with real ID
        type="shipping"
        label="Delivery Address"
        iconClass="fas fa-shipping-fast"
        defaultValues={{
            full_name: "John Doe",
            address_line1: "9th St. PATH Station",
            address_line2: "",
            city: "New York",
            state: "NY",
            country: "USA",
            postal_code: "10001",
            phone_number: "1234567890",
            is_default: false,
        }}
    />
);

const BillingAddress = () => (
    <EditableAddress
        id="456" // Replace with real ID
        type="billing"
        label="Home Address"
        iconClass="fa fa-home"
        defaultValues={{
            full_name: "John Doe",
            address_line1: "2 Miles Drive",
            address_line2: "",
            city: "NJ 071",
            state: "NJ",
            country: "USA",
            postal_code: "07001",
            phone_number: "9876543210",
            is_default: true,
        }}
    />
);

function Payment() {
    return <dl>
        <dt className="mb-1 font-semibold text-gray-900 dark:text-white">Payment Methods</dt>
        <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
            <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                <img className="h-4 w-auto dark:hidden"
                     src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                     alt=""/>
                <img className="hidden h-4 w-auto dark:flex"
                     src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                     alt=""/>
            </div>
            <div>
                <div className="text-sm">
                    <p className="mb-0.5 font-medium text-gray-900 dark:text-white">Visa ending in
                        7658</p>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Expiry 10/2024</p>
                </div>
            </div>
        </dd>
    </dl>;
}

const Main: React.FC<IProps> = ({}) => {
    return (
        <div className="py-4 md:py-8 relative">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <img className="h-16 w-16 rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                             alt="Helene avatar"/>
                        <div className="group">
                            <span
                                className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> PRO Account </span>
                            <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                                Helene Engels <span
                                className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ml-2">
                                  <i className="fas fa-edit cursor-pointer"></i>
                                </span>
                            </h2>
                        </div>
                    </div>
                    <dl className="">
                        <dt className="font-semibold text-gray-900 dark:text-white">Email Address</dt>
                        <dd className="text-gray-500 dark:text-gray-400">helene@example.com</dd>
                    </dl>
                    {/*<BillingAddress/>*/}
                    {/*<DeliveryAddress/>*/}
                </div>
                <div className="space-y-4">
                    <dl>
                        <dt className="font-semibold text-gray-900 dark:text-white">Phone Number</dt>
                        <dd className="text-gray-500 dark:text-gray-400">+1234 567 890 / +12 345 678</dd>
                    </dl>
                    <dl>
                        <dt className="font-semibold text-gray-900 dark:text-white">My Companies</dt>
                        <dd className="text-gray-500 dark:text-gray-400">FLOWBITE LLC, Fiscal code: 18673557</dd>
                    </dl>
                    <Payment/>
                </div>
            </div>
        </div>
    )
}


const containerId = 'profile-overview';
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
    )
    ;
}
