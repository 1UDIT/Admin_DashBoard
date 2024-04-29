import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface openProps {
    info: any;
}


export default function DrawerSilder() {
    const [value, setValue] = useState<number>(50);
    const [tools, showTool] = useState<boolean>(false);
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-center">Restore Panel</SheetTitle>
            </SheetHeader>
            <div className="mx-auto w-full max-w-sm pt-5">
                <div className="grid  grid-cols-2 px-3">
                    <div className="col-1"> <Label className="dark:text-white text-black">
                        Destination:
                    </Label>
                    </div>
                    <div className="col-1">
                        <Input id="name" value="l" className="bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                    </div>
                </div>
                <div className="grid  grid-cols-2 pt-2 px-3">
                    <div className="col-1">
                        <Label className="dark:text-white text-black">
                            Root Path:
                        </Label>
                    </div>
                    <div className="col-1">
                        <Input id="silder" value="l" className="bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                    </div>
                </div>
                <div className="grid  grid-cols-2 pt-2 px-3">
                    <div className="col-1">
                        <Label className="dark:text-white text-black">
                            Priority:
                        </Label>
                    </div>
                    <div className="w-44 pt-3 relative">
                        <Slider defaultValue={[value]} onValueChange={(value) => { setValue(Number(value)); }} onMouseEnter={() => showTool(true)} onMouseLeave={() => showTool(false)} max={100} step={1} onPointerDown={(e) => e.stopPropagation()} />
                        {tools === true ?
                            <span style={{ position: 'absolute', left: 'calc(' + value + '% + ' + (8 - value * 0.15) + 'px)', transform: 'translateX(-50%)' }}
                                className='bg-[red] text-[white] px-2 mt-2 '>{value}</span>
                            : null}
                    </div>
                </div>
            </div>
            <SheetFooter className="pt-3">
                <div className="flex">
                    <SheetClose asChild>
                        <Button type="submit" className="px-3">Restore</Button>
                    </SheetClose>
                </div>
            </SheetFooter>
        </SheetContent >

        // <SheetContent>
        //     <SheetHeader>
        //         <SheetTitle>Edit profile</SheetTitle>
        //         <SheetDescription>
        //             Make changes to your profile here. Click save when you're done.
        //         </SheetDescription>
        //     </SheetHeader>
        //     <div className="grid gap-4 py-4">
        //         <div className="grid grid-cols-4 items-center gap-4">
        //             <Label htmlFor="name" className="text-right">
        //                 Name
        //             </Label>
        //             <Input id="name" value="Pedro Duarte" className="col-span-3" />
        //         </div>
        //         <div className="grid grid-cols-4 items-center gap-4">
        //             <Label htmlFor="username" className="text-right">
        //                 Username
        //             </Label>
        //             <Input id="username" value="@peduarte" className="col-span-3" />
        //         </div>
        //     </div>
        //     <SheetFooter>
        //         <SheetClose asChild>
        //             <Button type="submit">Save changes</Button>
        //         </SheetClose>
        //     </SheetFooter>
        // </SheetContent>
    )
}
