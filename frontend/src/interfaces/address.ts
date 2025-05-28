
export interface Address {
    id: number;
    address_type: 'billing' | 'shipping'; // adjust as needed
    is_default: boolean;
    full_name: string;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    phone_number: string;
}

