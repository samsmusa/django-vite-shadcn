import React, {useEffect} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import {ArrowUpDown, ChevronDown} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Input} from "@/components/ui/input"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Badge} from "@/components/ui/badge";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {Order} from "@/interfaces/order";


interface IProps {
}


const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "id",
        header: "Order ID",
        cell: ({row}) => (
            <div className="capitalize">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            const status: string = row.getValue("status")

            const statusMap: Record<string, { color: string; label: string }> = {
                pending: {
                    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                    label: "Pending",
                },
                processing: {
                    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                    label: "Processing",
                },
                success: {
                    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                    label: "Completed",
                },
                failed: {
                    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
                    label: "Failed",
                },
            }

            const statusStyle = statusMap[status.toLowerCase()] ?? {
                color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
                label: status,
            }

            return (
                <Badge className={`capitalize ${statusStyle.color}`}>
                    {statusStyle.label}
                </Badge>
            )
        },
    },
    {
        accessorKey: "discount_amount",
        header: () => <div className="text-right">Discount</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("discount_amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "tax_amount",
        header: () => <div className="text-right">Tax</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("tax_amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "subtotal",
        header: () => <div className="text-right">Sub Total</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("subtotal"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "total",
        header: () => <div className="text-right">Total</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("total"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    }
]


const Main: React.FC<IProps> = ({}) => {
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const api = useAxios<PaginatedResponse<Order>>({
        baseURL: `/api/private/orders/`,
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


    const table = useReactTable({
        data: api?.data?.results || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            columnVisibility,
            rowSelection,
        },
    })
    useEffect(() => {
        api.list("?limit=9&offset=0").then();
    }, []);

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border h-96 overflow-y-auto">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        // onClick={() => table.previousPage()}
                        // disabled={!table.getCanPreviousPage()}
                        onClick={() => {
                            if (api?.data?.previous) {
                                api.list(api.data.previous)
                            }
                        }}
                        disabled={!api?.data?.previous}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        // onClick={() => table.nextPage()}
                        // disabled={!table.getCanNextPage()}
                        onClick={() => {
                            if (api?.data?.next) {
                                api.list(api?.data?.next)
                            }
                        }}
                        disabled={!api?.data?.next}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}


const containerId = 'user-orders';
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
