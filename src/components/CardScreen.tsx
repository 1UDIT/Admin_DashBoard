import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CircularProgressBar from './CircularProgressBar'
import SystemInfo from "./SystemInfo"



const demo = [
    {
        index: '2',
        Name: "Ultilization Stats",
        defaultValue: "USED SPACE",
        tabs: [
            { name: "USED SPACE" },
            { name: "CLOUD" },
            { name: "DISK" },
            { name: "PROXY" },
            { name: "TAPES" },
        ]
    },
    {
        index: '3',
        Name: "Alerts",
        defaultValue: "SUMMARY",
        tabs: [
            { name: "SUMMARY" },
            { name: "ALERT LOG" },
        ]
    },
    {
        index: '4',
        Name: "Storage Resource",
        defaultValue: "CLOUD",
        tabs: [
            { name: "CLOUD" },
            { name: "DISKS" },
            { name: "PROXY DISKS" },
            { name: "LIBRARIES" },
        ]
    }
]


const defaultHTML = (defaultValue: string) => {
    switch (defaultValue) {
        case "USED SPACE":
            return (
                <TabsContent value="USED SPACE">
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="col-span-1 p-10  bg-gradient-to-r from-[#ff00ea] to-[#741676] ">
                                <CircularProgressBar progress={50} />
                            </div>
                            <div className="col-span-1 p-10">
                                <p>Card Content</p>
                            </div>
                            <div className="col-span-1 p-10">
                                <p>Card Content</p>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>
            )
        case "SUMMARY":
            return (
                <TabsContent value="SUMMARY">
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="col-span-1 p-10">
                                <div className="flex flex-col items-center">
                                    <div className="rounded-full border-4 border-[#48bb78] flex items-center justify-center w-16 h-16">
                                        <span className="text-[#48bb78] font-bold text-2xl">6</span>
                                    </div>
                                    <span className="text-[#48bb78] mt-1">INFO</span>
                                </div>
                            </div>
                            <div className="col-span-1 p-10">
                                <div className="flex flex-col items-center">
                                    <div className="rounded-full border-4 border-[#f6e05e] flex items-center justify-center w-16 h-16">
                                        <span className="text-[#f6e05e] font-bold text-2xl">0</span>
                                    </div>
                                    <span className="text-[#f6e05e] mt-1">WARNINGS</span>
                                </div>
                            </div>
                            <div className="col-span-1 p-10">
                                <div className="flex flex-col items-center">
                                    <div className="rounded-full border-4 border-[#f56565] flex items-center justify-center w-16 h-16">
                                        <span className="text-[#f56565] font-bold text-2xl">0</span>
                                    </div>
                                    <span className="text-[#f56565] mt-1">CRITICAL</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>
            )
        case "CLOUD":
            return (
                <TabsContent value="CLOUD">
                    <CardContent>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 p-10">
                                <p>Card Content</p>
                            </div>
                            <div className="col-span-1 p-10">
                                <p>Card Content</p>
                            </div>
                            <div className="col-span-1 p-10">
                                <p>Card Content</p>
                            </div>
                        </div>
                    </CardContent>
                    {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
                </TabsContent>
            )

        default:
            break;
    }
}



export default function CardScreen() {
    return (
        <>
            {/* <CardHeader> */}
            <div className="grid grid-cols-1   gap-4 h-full md:grid-cols-2">
                <div className="col-span-1 p-4">
                    <SystemInfo />
                </div>
                {
                    demo.map((value) => {
                        return (
                            <div className="col-span-1 p-4" key={value.index}>
                                <Card className="bg-[#1f2937] h-full border-0 p-2 md:h-96">
                                    <CardTitle className='text-white text-xl font-mono w-full pt-4 pl-4'>{value.Name}</CardTitle>
                                    <Tabs defaultValue={value.defaultValue} className="w-full p-4">
                                        {value.tabs === undefined ? null :
                                            <>
                                                <TabsList className="grid w-full grid-cols-5 ">
                                                    {
                                                        value.tabs?.map((tabsValue) => {
                                                            return (
                                                                <CardDescription>
                                                                    <TabsTrigger value={tabsValue.name} className="col-span-1">{tabsValue.name}</TabsTrigger>
                                                                </CardDescription>
                                                            )
                                                        })
                                                    }
                                                </TabsList>

                                            </>
                                        }
                                        {defaultHTML(value.defaultValue)}
                                    </Tabs>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        </ >
    )
}
