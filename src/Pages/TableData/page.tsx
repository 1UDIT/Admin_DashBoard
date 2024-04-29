import DefaultLayout from "@/components/layout/defaultLayout"; 
import { columns } from "./MainTable/columns";
import GetDataCall from "./GetDataCall"; 
import ReactTable from "./MainTable/table";


export default function TableData() {
    const data = [...GetDataCall];
    return (
        <DefaultLayout>
            {/* <Reacttable columns={columns} data={data} /> */}
            <ReactTable columns={columns} data={data} />
        </DefaultLayout>
    )
}
