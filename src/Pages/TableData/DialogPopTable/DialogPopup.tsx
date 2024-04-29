import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog" 
import GetDataCall from "../GetDataCall";
import DialogTableData from "./DialogTable"; 
import { useContextMenu } from "react-contexify";
import { useDispatch } from "react-redux";
import { tableBackground } from "@/Redux/tableDropdown";

interface openProps {
    // saveDetail: any;
    info: any;
}
 

export default function DialogPopup({ info }: openProps) {
    const dispatch = useDispatch();

    
    console.log(info, "oprn")
    const data = [...GetDataCall];
    return (
        <DialogContent className="md:w-6/12" onInteractOutside={() => { info.toggleSelected(false);dispatch(tableBackground(false));  }}>
            <DialogHeader >
                <DialogTitle>Edit profile</DialogTitle>
            </DialogHeader>
            <DialogTableData data={data} />
            <DialogFooter className="sm:justify-start pt-5">
                <DialogClose asChild>
                    <Button type="button" variant="secondary" size='lg'>
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}
