import {Address} from "@/interfaces/address";

export interface Order {
    id: number
    items: any[]
    shipping_address: Address
    billing_address: Address
    discount: string | null
    guest_email: string | null
    order_number: string
    status: "pending" | "processing" | "shipped" | "completed" | "cancelled" | string
    subtotal: string
    discount_amount: string
    shipping_cost: string
    tax_amount: string
    total: string
    currency: string
    notes: string
    tracking_number: string | null
    shipping_carrier: string | null
    estimated_delivery_date: string | null
    created_at: string
    updated_at: string
    ip_address: string | null
    user_agent: string
    user: number
}