import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    ColumnFiltersState,
    getFilteredRowModel,
    createColumnHelper,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { contextMenu } from 'react-contexify';

type Person = {
    srcdes: string,
}

const columnHelper = createColumnHelper<Person>();
interface DataTableProps<TData> {
    data: TData[]
}


export default function DialogTableData<TData>({
    data
}: DataTableProps<TData>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const columns = useMemo<ColumnDef<any, string>[]>(() => [
        columnHelper.accessor('srcdes', {
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Source/Dest
                    </Button>
                )
            },
            cell: info => info.getValue(),
            footer: info => info.column.id,
            meta: {
                className:
                    "sticky right-0",
            },
        }),
    ], [])
 


    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
    })



    return (<>
        <div className="flex items-center py-4">
            <Input
                placeholder="Filter srcdes..."
                value={(table.getColumn("srcdes")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn("srcdes")?.setFilterValue(event.target.value)
                }
                className="max-w-sm border border-neutral-950 dark:border-orange-500 rounded-md"
            />
        </div>
        <div className="h-40 overflow-auto">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className=' dark:bg-[#2d3d52] bg-slate-50 dark:drop-shadow-1 drop-shadow-md '>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} style={{ width: header.getSize() !== 150 ? header.getSize() : undefined, textAlign: "left" }}
                                        className={'select-none text-black dark:text-white sticky top-0 dark:bg-[#2d3d52] bg-slate-50 dark:drop-shadow-1 drop-shadow-md'}>
                                        {header.isPlaceholder ? null : (
                                            <>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </>
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
                                key={row.index}
                                data-state={row.getIsSelected() && "selected"}
                                className='text-black dark:text-white dark:odd:bg-[#24303f] dark:even:bg-[#2d3d52] odd:bg-white even:bg-slate-50 font-medium'
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </>
    )
}
