import {
    Card, 
    CardDescription, 
    CardTitle,
} from "./ui/card"

 


export default function SystemInfo() {
    return (
        <Card className="bg-[#1f2937]  border-0 p-2 h-96">
            <div className="grid grid-cols-1 gap-4 h-full w-full md:grid-cols-2">
                {/* <div className="col-span-1 p-4 bg-green-900 w-80">
                    <CardTitle className='text-white size-7 w-full'>Images</CardTitle>
                </div> */}
                <div className="col-span-1 w-80">
                    <CardTitle className='text-white text-xl font-mono w-full  pt-4 pl-4'>System Info</CardTitle>
                    <CardDescription className='text-white text-base w-full p-3'>Name1</CardDescription>
                    <CardDescription className='text-white text-base w-full p-3'>Name2</CardDescription>
                    <CardDescription className='text-white text-base w-full p-3'>Name3</CardDescription>
                    <CardDescription className='text-white text-base w-full p-3'>Name4</CardDescription>
                    <CardDescription className='text-white text-base w-full p-3'>Name5</CardDescription>
                </div>
            </div>
        </Card>
    )
}
