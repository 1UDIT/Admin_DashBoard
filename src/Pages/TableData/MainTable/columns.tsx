"use client"
import { ColumnDef } from "@tanstack/react-table"
import { FaArrowUp, FaArrowDown, FaTag } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropId, tableBackground, tableDown } from "@/Redux/tableDropdown";
import { RootState } from "@/Redux/Store";
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineMinusCircle } from "react-icons/hi";
import DialogPopup from "../DialogPopTable/DialogPopup";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import DrawerSilder from "../DialogPopTable/RestoreSilder";
import CallDrawerSilder from "../callDrawerSilder";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { VscDebugRestart } from "react-icons/vsc";
import { FaFile } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export type Person = {
    Image: string,
    Object: string,
    Category: string,
    Size: String,
    Media: String,
    status: string,
    progress: string,
    index: number,
    date: string,
    srcdes: string,
    subrows?: Task[],

}
type Task = {
    firstname: string;
};


export const columns: ColumnDef<Person>[] = [
    {
        accessorKey: 'Image',
        // cell: info => info.getValue(),
        cell: (info: any) => {
            return (
                // <img src={info.getValue()} width={'50px'}/>
                <HoverCard>
                    <HoverCardTrigger asChild className="px-2">
                        <img src={info.getValue()} style={{ height: '1.0rem', width: '100%', maxWidth: "350px", objectFit: "cover" }} />
                    </HoverCardTrigger>
                    <HoverCardContent align="start">
                        <div className="flex justify-between space-x-4">
                            <img src={info.getValue()} />
                        </div>
                    </HoverCardContent>
                </HoverCard>
            )
        },
        header: ({ }) => {
            return (<>
            </>
            )
        },
        size: 40,
    },
    {
        accessorKey: 'Object',
        cell: (info: any) => { return (<span className="pl-2">{info.getValue()}</span>) },
        header: ({ column }) => {
            return (<>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Object Name
                    <span className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-end items-center text-6xl text-white font-semibold w-9/12">
                        {column.getIsSorted() === "asc" ? <FaArrowUp className="ml-12 h-4 w-4" /> : <FaArrowDown className="ml-12 h-4 w-4" />}
                    </span>
                </Button>
            </>
            )
        },
        size: 130,
    },
    {
        accessorKey: 'Category',
        cell: info => info.getValue(),
        header: ({ column }) => {
            return (<>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Object Category
                    <span className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-end items-center text-6xl text-white font-semibold w-9/12">
                        {column.getIsSorted() === "asc" ? <FaArrowUp className="ml-12 h-4 w-4" /> : <FaArrowDown className="ml-12 h-4 w-4" />}
                    </span>
                </Button>
            </>
            )
        },
        size: 130,
    },
    {
        accessorKey: 'date',
        cell: info => info.getValue(),
        header: ({ column }) => {
            return (<>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Archive Date
                    <span className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-end items-center text-6xl text-white font-semibold w-9/12">
                        {column.getIsSorted() === "asc" ? <FaArrowUp className="ml-12 h-4 w-4" /> : <FaArrowDown className="ml-12 h-4 w-4" />}
                    </span>
                </Button>
            </>
            )
        },
        size: 140,
    },
    {
        accessorKey: 'Size',
        cell: info => info.getValue(),
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Object Size
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-end items-center text-6xl text-white font-semibold w-9/12">
                        {column.getIsSorted() === "asc" ? <FaArrowUp className="ml-12 h-4 w-4" /> : <FaArrowDown className="ml-12 h-4 w-4" />}
                    </div>
                </Button>
            )
        },
        size: 120,
    },
    {
        accessorKey: 'Media',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Media
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-end items-center text-6xl text-white font-semibold w-9/12">
                        {column.getIsSorted() === "asc" ? <FaArrowUp className="ml-12 h-4 w-4" /> : <FaArrowDown className="ml-12 h-4 w-4" />}
                    </div>
                </Button>
            )
        },
        cell: info => info.getValue(),
        size: 160,
    },
    // {
    //     accessorKey: 'Detail',
    //     header: () => {
    //         return (<>
    //         </>
    //         )
    //     },
    //     size: 20,
    //     cell: (info: any) => {
    //         return (
    //             fileDialog(info.row)
    //         )
    //     },

    // },
    {
        accessorKey: 'More_Detail',
        header: ({ column }: any) => {
            return (
                ArchiveDrawer(column)
            )
        },
        size: 20,
        // cell: (info: any) => {
        //     return (
        //         downSilder(info.row)
        //     )
        // },

    },

]

const ArchiveDrawer = (info: any) => {
    const [saveDetail, setsaveDetail] = useState<any | null>(null);
    const [openSilder, setOpenSilder] = useState(false);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" onClick={() => { setsaveDetail(info.id); }}>
                    <VscDebugRestart className="ml-2 h-6 w-6 text-green-500" />
                </Button>
            </SheetTrigger>
            <DrawerSilder />
        </Sheet>
    )
}

const downSilder = (info: any) => {
    const dispatch = useDispatch();
    const [saveDetail, setsaveDetail] = useState<any | null>(null);
    const [openSilder, setOpenSilder] = useState(false);
    return (
        <Drawer direction='right' open={openSilder} onOpenChange={setOpenSilder}>
            <DrawerTrigger asChild>
                <Button variant="ghost" onClick={() => {
                    setsaveDetail(info.original); dispatch(dropId(info.id)); dispatch(tableBackground(true));
                    info.toggleSelected(false)
                }}>
                    <IoIosInformationCircleOutline className="ml-2 h-4 w-6 text-green-500" />
                </Button>
            </DrawerTrigger>
            {
                saveDetail !== null ?
                    <CallDrawerSilder info={info} /> : null
            }

        </Drawer>
    )
};


const fileDialog = (info: any) => {
    const dispatch = useDispatch();
    const [saveDetail, setsaveDetail] = useState<any | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <Dialog onOpenChange={() => { setOpen(!open) }} open={open} modal={open}>
            <DialogTrigger asChild>
                <Button variant="ghost" onClick={() => {
                    setsaveDetail(info.original); dispatch(dropId(info.id)); dispatch(tableBackground(true));
                    info.toggleSelected(false)
                }}>
                    < FaFile className="ml-2 h-4 w-6 text-green-500" />
                </Button>
            </DialogTrigger>
            {
                saveDetail !== null ?
                    <DialogPopup info={info} /> : null
            }

        </Dialog>
    )
}

const CallerTable = (info: any) => {
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();
    const downdowntableId = useSelector((state: RootState) => state.tableDownClick.Id)
    return (<>
        {
            click === true && downdowntableId === info.id ? <Button variant="ghost">
                <HiOutlineMinusCircle onClick={() => { setClick(false); dispatch(dropId(info.id)); dispatch(tableDown(false)); }} className="h-4 w-7 text-[#ff0000]" />
            </Button> :
                <Button variant="ghost">
                    <GoPlusCircle onClick={() => { setClick(true); dispatch(dropId(info.id)); dispatch(tableDown(true)); }} className="h-4 w-7 text-[#22c55e]" />
                </Button>
        }
    </>
    )
}
