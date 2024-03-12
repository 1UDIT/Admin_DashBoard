// import {
//     createColumnHelper,
//     flexRender,
//     getCoreRowModel,
//     useReactTable,
// } from '@tanstack/react-table'; 
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress"
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import DefaultLayout from "@/components/layout/defaultLayout";

type Person = {
    firstName: string
    lastName: string
    age: String
    visits: String
    status: string
    progress: number
    index: number,
    date: string,
    srcdes: string
}

const defaultData: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: "Copy",
        visits: "Nld_disk",
        status: 'Aborted',
        progress: 50,
        index: 1,
        date: "12-12-2024",
        srcdes: "testCifs"
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: "Copy",
        visits: "Nld_disk",
        status: 'Compelete',
        progress: 80,
        index: 2,
        date: "12-12-2024",
        srcdes: "testCifs"
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: "Copy",
        visits: "Nld_disk",
        status: 'Progress',
        progress: 10,
        index: 3,
        date: "12-12-2024",
        srcdes: "testCifs"
    },
    {
        firstName: 'joed',
        lastName: 'dirte',
        age: "Copy",
        visits: "Nld_disk",
        status: 'Compelete',
        progress: 100,
        index: 4,
        date: "12-12-2024",
        srcdes: "testCifs"
    },
    {
        firstName: 'joer',
        lastName: 'dirte',
        age: "Copy",
        visits: "Nld_disk",
        status: 'Progress',
        progress: 10,
        index: 5,
        date: "12-12-2024",
        srcdes: "testCifs"
    },
]

// const columnHelper = createColumnHelper<Person>()

const statusCall = (status: string) => {
    switch (status) {
        case "Compelete":
            return (
                <span className='flex cols-2 justify-end'>
                    <div className="col-span-1 ">
                        <FaCheckCircle className='text-[#6aff00] inline-block ' />
                    </div>
                    <div className="col-span-1">
                        Compelete
                    </div>
                </span>
            )
        case "Aborted":
            return (
                <span className='flex cols-2 justify-end gap-4'>
                    <div className="col-span-1 ">
                        <FaExclamationCircle className='text-[#ff3842] inline-block ' />
                    </div>
                    <div className="col-span-1">
                        Aborted
                    </div>
                </span>
            )
        case "Progress":
            return (
                <span className='flex cols-2 justify-end gap-4'>
                    <div className="col-span-1 ">
                        <GrInProgress className='text-[#00ffa6] inline-block animate-spin-slow' />
                    </div>
                    <div className="col-span-1">
                        Progress
                    </div>
                </span>
            )

        default:
            break;
    }
}


export default function Tabledata() {
    const data = [...defaultData]
    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products").then((response) => { setData(response.data) }).catch((error) => console.log("Error", error));
    // }, []);

    // const columns = [
    //     columnHelper.accessor('firstName', {
    //         cell: info => info.getValue(),
    //         footer: info => info.column.id,
    //     }),
    //     columnHelper.accessor(row => row.lastName, {
    //         id: 'lastName',
    //         cell: info => <i>{info.getValue()}</i>,
    //         header: () => <span>Last Name</span>,
    //         footer: info => info.column.id,
    //     }),
    //     columnHelper.accessor('age', {
    //         header: () => 'Age',
    //         cell: info => info.renderValue(),
    //         footer: info => info.column.id,
    //     }),
    //     columnHelper.accessor('visits', {
    //         header: () => <span>Visits</span>,
    //         footer: info => info.column.id,
    //     }),
    //     columnHelper.accessor('status', {
    //         header: 'Status',
    //         footer: info => info.column.id,
    //     }),
    //     columnHelper.accessor('progress', {
    //         header: 'Profile Progress',
    //         footer: info => info.column.id,
    //         cell: info => <span><Progress value={info.getValue()} className="w-[60%]" /></span>,
    //     }),
    // ]
    // const table = useReactTable({
    //     data,
    //     columns,
    //     getCoreRowModel: getCoreRowModel(),
    // })

    return (
        <DefaultLayout>
            <div className="p-2">
                <Table className='text-black dark:text-white '>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Id</TableHead>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Src/Des</TableHead>
                            <TableHead className="text-right">status</TableHead>
                            <TableHead className="text-right">Progress</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((invoice) => (
                            <TableRow key={invoice.index}  >
                                <TableCell className="text-center">{invoice.index}</TableCell>
                                <TableCell  >{invoice.firstName}</TableCell>
                                <TableCell>{invoice.lastName}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.age}</TableCell>
                                <TableCell className="text-right">{invoice.visits}</TableCell>
                                <TableCell className="text-right">{invoice.srcdes}</TableCell>
                                <TableCell className="text-right">{statusCall(invoice.status)}</TableCell>
                                <TableCell className="flex flex-row-reverse ">
                                    <Progress value={invoice.progress} className="w-[90%] flex justify-center " /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </DefaultLayout>
    )
}
