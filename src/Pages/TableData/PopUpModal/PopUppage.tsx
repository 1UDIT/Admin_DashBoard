import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DialogTableData from "../DialogPopTable/DialogTable";
import GetDataCall from "../GetDataCall";
import { Fragment, useState } from "react";

interface  TableProps  {
    closeModal: React.MouseEventHandler 
  }

const demo = [
    {
        index: '1',
        Name: "Object Properties",
        defaultValue: "Properties",
        tabs: [
            { name: "Properties" },
            { name: "Instances" },
            { name: "Components" },
        ]
    },
]

const data = [...GetDataCall];

const defaultHTML = (defaultValue: string, closeModal:React.MouseEventHandler) => {
    switch (defaultValue) {
        case "Properties":
            return (
                <TabsContent value="Properties">
                    <CardContent>
                        <div className="bg-[#1f2937] text-white p-2">
                            <button onClick={closeModal} className=" bg-[#1f2937] text-white rounded-full border border-white block absolute right-1 top-1 text-xl px-1.5 py-1.5" >
                                &times;
                            </button>
                            {/* <div className="text-center   text-xl border-b-4 border-indigo-500">Object Properties</div> */}
                            <div className="p-2 h-66 flex flex-row">
                                <div className="basis-1/4">
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px]">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/4">
                                    <div className="grid grid-cols-[75px_minmax(250px,_1fr)_0px] pl-3">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Comments:
                                            </Label>
                                        </div>
                                        <div className="col-1 ">
                                            <textarea id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white h-52" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <Button onClick={close} className="bg-white text-black rounded-md border border-white relative text-sm m-2 p-2 block absolute  right-15 text-sm px-1.5 py-0.5" >
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 h-66 border-t-4 border-b-4 border-indigo-500">
                                <div className="text-left p-2 text-md">Instance Details :</div>
                                <DialogTableData data={data} />
                            </div>
                            <div className="m-auto text-center">
                                <button
                                    className="bg-white text-black rounded-md border border-white relative text-sm m-2 p-2"
                                    onClick={closeModal}
                                >
                                    close
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>
            )
        case "Instances":
            return (
                <TabsContent value="Instances">
                    <CardContent>
                        <div className="bg-[#1f2937] text-white p-2">
                            <button onClick={closeModal} className=" bg-[#1f2937] text-white rounded-full border border-white block absolute -right-0 -top-0 text-xl px-1.5 py-1.5" >
                                &times;
                            </button>
                            {/* <div className="text-center   text-xl border-b-4 border-indigo-500">Object Properties</div> */}
                            <div className="p-2 h-66 flex flex-row">
                                <div className="basis-1/4">
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px]">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/4">
                                    <div className="grid grid-cols-[75px_minmax(250px,_1fr)_0px] pl-3">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Comments:
                                            </Label>
                                        </div>
                                        <div className="col-1 ">
                                            <textarea id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white h-52" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <Button onClick={close} className="bg-white text-black rounded-md border border-white relative text-sm m-2 p-2 block absolute  right-15 text-sm px-1.5 py-0.5" >
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 h-66 border-t-4 border-b-4 border-indigo-500">
                                <div className="text-left p-2 text-md">Instances1 Details :</div>
                                <DialogTableData data={data} />
                            </div>
                            <div className="m-auto text-center">
                                <button
                                    className="bg-white text-black rounded-md border border-white relative text-sm m-2 p-2"
                                    onClick={closeModal}
                                >
                                    close
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>
            )
        case "Components":
            return (
                <TabsContent value="Components">
                    <CardContent>
                        <div className="bg-[#1f2937] text-white p-2">
                            <button onClick={closeModal} className=" bg-[#1f2937] text-white rounded-full border border-white block absolute -right-0 -top-0 text-xl px-1.5 py-1.5" >
                                &times;
                            </button>
                            {/* <div className="text-center   text-xl border-b-4 border-indigo-500">Object Properties</div> */}
                            <div className="p-2 h-66 flex flex-row">
                                <div className="basis-1/4">
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px]">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[100px_minmax(250px,_1fr)_0px] pt-2">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Descriptions1:
                                            </Label>
                                        </div>
                                        <div className="col-1">
                                            <Input id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/4">
                                    <div className="grid grid-cols-[75px_minmax(250px,_1fr)_0px] pl-3">
                                        <div className="col-1">
                                            <Label className="dark:text-white text-black">
                                                Comments:
                                            </Label>
                                        </div>
                                        <div className="col-1 ">
                                            <textarea id="name" value="l" className="w-full bg-white text-black dark:bg-slate-700 dark:text-white h-52" disabled />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <Button onClick={close} className="bg-white text-black rounded-md border border-white relative text-sm m-2 p-2 block absolute  right-15 text-sm px-1.5 py-0.5" >
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 h-66 border-t-4 border-b-4 border-indigo-500">
                                <div className="text-left p-2 text-md">Components Details :</div>
                                <DialogTableData data={data} />
                            </div>
                            <div className="m-auto text-center">
                                <button
                                    className="bg-white text-black rounded-md border border-white relative text-sm m-2 p-2"
                                    onClick={closeModal}
                                >
                                    close
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>
            )

        default:
            break;
    }
}

export default function PopUppage({ closeModal }:TableProps) {
    return (
        <div>
            {
                demo.map((value) => {
                    return (
                        <div className="col-span-1 p-4" key={value.index}>
                            <Card className="bg-[#1f2937] h-full border-0 p-2">
                                <CardTitle className='text-white text-xl font-mono w-full pt-4 pl-4'>{value.Name}</CardTitle>
                                <Tabs defaultValue={value.defaultValue} className="w-full p-4">
                                    {value.tabs === undefined ? null :
                                        <>
                                            <TabsList className="grid w-full grid-cols-3">
                                                {
                                                    value.tabs?.map((tabsValue, index) => {
                                                        return (
                                                            <CardDescription key={index} className="border-b-4 border-indigo-500">
                                                                <TabsTrigger value={tabsValue.name} className="col-span-1" >{tabsValue.name}</TabsTrigger>
                                                            </CardDescription>
                                                        )
                                                    })
                                                }
                                            </TabsList>
                                            {
                                                value.tabs?.map((tabsValue, index) => {
                                                    return (
                                                        <Fragment key={tabsValue.name}>
                                                            {defaultHTML(tabsValue.name, closeModal)}
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </>
                                    }
                                </Tabs>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
