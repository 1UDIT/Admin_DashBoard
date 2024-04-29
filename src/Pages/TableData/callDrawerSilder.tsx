import { tableBackground } from "@/Redux/tableDropdown"; 
import {
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import { useDispatch } from "react-redux";

interface openProps {
    info: any;
}

export default function CallDrawerSilder({ info }: openProps) {
    const dispatch = useDispatch();
    return (
        <DrawerContent onInteractOutside={() => { info.toggleSelected(false); dispatch(tableBackground(false)); }}>
            <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                    <div className="flex grid-cols-3">
                        <div className="grid grid-rows-2 ">
                            <div className="rows-1"> <Label className="dark:text-white text-black">
                                Descriptions:
                            </Label>
                            </div>
                            <div className="rows-1">
                                <Input id="name" value="l" className="bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="grid grid-rows-2 pl-3">
                                <div className="rows-1">
                                    <Label className="dark:text-white text-black">
                                        File Type:
                                    </Label>
                                </div>
                                <div className="rows-1">
                                    <Input id="name" value="l" className="bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="grid grid-rows-2 pl-3">
                                <div className="rows-1">
                                    <Label className="dark:text-white text-black">
                                        Start Time Code:
                                    </Label>
                                </div>
                                <div className="rows-1">
                                    <Input id="name" value="l" className="bg-white text-black dark:bg-slate-700 dark:text-white" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </DrawerHeader>
                {/* <DrawerFooter>
                    <div className="flex grid-cols-2">
                        <div className="col-1">
                            <Button className="w-64">Edit</Button>
                        </div>
                        <div className="col-1 pl-5">
                            <DrawerClose asChild className="w-64 ">
                                <Button variant="outline" onClick={() => { info.toggleSelected(false) }}>Cancel</Button>
                            </DrawerClose>
                        </div> 
                    </div>
                </DrawerFooter> */}
            </div>
        </DrawerContent>
    )
}
