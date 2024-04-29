import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { Input } from "@/components/ui/input";
import { RxCross1 } from "react-icons/rx";
import { Button } from '@/components/ui/button';
import { Fragment } from 'react/jsx-runtime';
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu
} from "react-contexify";
import { FaSearch } from "react-icons/fa";
import "react-contexify/dist/ReactContexify.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { Label } from '@/components/ui/label';
import DialogTableData from '../DialogPopTable/DialogTable';
import { FiFilter } from "react-icons/fi";
import PopUppage from '../PopUpModal/PopUppage';

const MENU_ID = "menu-id";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function ReactTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const downdowntable = useSelector((state: RootState) => state.tableDownClick.active)
  const downdowntableId = useSelector((state: RootState) => state.tableDownClick.Id);
  const downdowntableBackground = useSelector((state: RootState) => state.tableDownClick.BackGroundDropBox);
  const [RowSelection, setRowselection] = useState("");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [highlightedRows, SetMultipleRowsSelection] = useState<any[]>([]);
  const [MultipleIdstore, setMultipleIdstore] = useState<any[]>([]);
  const navigate = useNavigate();

  const { show } = useContextMenu({
    id: MENU_ID
  });

  const openModal = () => { setOpen(!false) };
  const closeModal = () => {
    setOpen(false);
  };
  
  function displayMenu(e: React.MouseEvent) {
    show({
      event: e,
    });
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    enableMultiRowSelection: false
  });

  // useEffect(() => {
  //   table.getSelectedRowModel().rows?.map((value) => {
  //     setRowselection(value.original);
  //   })
  // }, [table.getSelectedRowModel().rows])

  const openSearchBtn = (Value: string) => {
    console.log("btn", Value);
    setDropdownOpen(Value);

    if (dropdownOpen === Value) {
      setDropdownOpen('');
    }

  }

  const selectioRow = (event: React.MouseEvent, id: any) => {

    if (event.ctrlKey) {
      SetMultipleRowsSelection((current) => {
        if (current.includes(id)) {
          return (current as string[]).filter((entry) => entry !== id);
        }
        else {
          return [...current, id];
        }
      });
    } else if (event.shiftKey) {
      var MultipleIdstore: string[] = [];

      SetMultipleRowsSelection((current) => {
        const start = Math.min(...current);
        const end = Math.max(...current);
        if (id < end) {
          for (var i = id; i <= start; i++) {
            MultipleIdstore.push(i.toString());
          }
        }
        else {
          for (i = start; i <= id; i++) {
            MultipleIdstore.push(i.toString());
          }
        }
        return ([...MultipleIdstore]);

      }
      )
    }
    else {
      setRowselection(id);
      SetMultipleRowsSelection(id);
    }
  }



  return (
    <div className="relative w-full overflow-auto lg:h-[55rem]  h-[40rem] bg-white dark:bg-[#1a222c]">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <Fragment key={headerGroup.id} >
              <TableRow className=' dark:bg-[#2d3d52] bg-slate-50  '>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead   {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        position: 'relative', width: header.getSize(), textAlign: "left"
                      },
                    }} className='select-none text-black dark:text-white'>
                      {header.isPlaceholder
                        ? null
                        : (
                          <div className="grid grid-cols-5">
                            <div className="col-span-4 relative">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                            <div className="col-span-1 ">
                              {header.id === "DropDownTable" || header.id === "Image" || header.id === "More_Detail" ? null :
                                <FiFilter className="text-white pt-1 h-[25px] w-[25px]" onClick={() => { openSearchBtn(header.id); table.getColumn(header.id)?.setFilterValue(null) }} />
                              }

                            </div>
                          </div>
                        )}
                      {dropdownOpen === header.id && <div style={{ width: "100%" }}>
                        <div className="flex items-center h-7 w-9/12  border border-neutral-950 dark:border-orange-500 rounded-md mb-1 ml-4 bg-white">
                          <input autoFocus
                            value={(table.getColumn(header.id)?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                              table.getColumn(header.id)?.setFilterValue(event.target.value)
                            }
                            className=" h-9  text-black   bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed max-w-sm flex  w-full" />
                          <button className='dark:border-orange-500 p-2.5 mt-1 ' onClick={() => table.getColumn(header.id)?.setFilterValue(null)}>
                            <RxCross1 className=" h-4 w-4 text-black" />
                          </button>
                        </div>
                      </div>}
                      {header.column.getCanResize() && (
                        <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''
                            }`}
                        ></div>
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
              {/* <TableRow className=' dark:bg-[#2d3d52] bg-slate-50   '>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead   {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        position: 'relative', width: header.getSize(), textAlign: "left"
                      },
                    }} className='select-none text-black dark:text-white'>
                      {header.id === "DropDownTable" || header.id === "select" || header.id === "More_Detail" || header.id === "Detail" || header.id === "Image" ?
                        null : <div className="flex items-center w-[120px]  h-7   border border-neutral-950 dark:border-orange-500 rounded-md mb-1 mr-5">
                          <Button variant="ghost" className='dark:border-orange-500 p-2.5 mt-1 ' onClick={() => table.getColumn(header.id)?.setFilterValue(null)}>
                            <FaSearch className=" h-3 w-3 dark:text-white" />
                          </Button>
                          <Input
                            id={header.id}
                            value={(table.getColumn(header.id)?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                              table.getColumn(header.id)?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm flex  w-full"
                          />
                          <Button variant="ghost" className='dark:border-orange-500 p-2.5 mt-1 ' onClick={() => table.getColumn(header.id)?.setFilterValue(null)}>
                            <RxCross1 className=" h-3 w-3 dark:text-white" />
                          </Button>
                        </div>
                      }
                    </TableHead>
                  )
                })}
              </TableRow> */}

            </Fragment>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <Fragment key={row.id}>
                  <TableRow
                    onClick={(e) => { selectioRow(e, row.id) }}
                    onDoubleClick={() => openModal()}
                    onContextMenu={(e) => { RowSelection === row.id ? displayMenu(e) : null }}
                    className={`text-black dark:text-white dark:odd:bg-[#24303f] h-7 dark:even:bg-[#2d3d52] odd:bg-white even:bg-slate-50 font-medium select-none ${row.getIsSelected() ? "dark:text-black" : ""
                      && (downdowntableId === row.id ? "dark:text-black" : "")}`}
                    style={highlightedRows.includes(row.id) ? { backgroundColor: "rgb(226 186 119)", color: "black" } : {} && (downdowntableBackground === true && downdowntableId === row.id ? { backgroundColor: "rgb(226 186 119)" } : {})}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                  {/* {
                    downdowntable && downdowntableId === row.id ? ( // Render nested table if row is expanded
                      <TableRow >
                        <TableCell colSpan={columns.length} className="text-center">
                          <div className="flex flex-col text-white text-center overflow-auto h-24 w-full">
                            <div className="flex flex-row sticky top-0 bg-[#1a222c]">
                              <div className='basis-1/6'>Instaces Number</div>
                              <div className='basis-1/6'>Type</div>
                              <div className='basis-1/6'>Media</div>
                              <div className='basis-1/6'>Creation date</div>
                              <div className='basis-1/6'>Location</div>
                              <div className='basis-1/6'>Online</div>
                            </div>
                            <div className="flex flex-row">
                              <div className='basis-1/6'>0</div>
                              <div className='basis-1/6'>Nld_Disk</div>
                              <div className='basis-1/6'>NLD_disk</div>
                              <div className='basis-1/6'>28-03-2024</div>
                              <div className='basis-1/6'>Mover</div>
                              <div className='basis-1/6'>Y</div>
                            </div>
                            <div className="flex flex-row">
                              <div className='basis-1/6'>1</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>28-03-2024</div>
                              <div className='basis-1/6'>Mover2</div>
                              <div className='basis-1/6'>N</div>
                            </div>
                            <div className="flex flex-row">
                              <div className='basis-1/6'>3</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>28-03-2024</div>
                              <div className='basis-1/6'>Mover2</div>
                              <div className='basis-1/6'>N</div>
                            </div>
                            <div className="flex flex-row">
                              <div className='basis-1/6'>4</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>28-03-2024</div>
                              <div className='basis-1/6'>Mover2</div>
                              <div className='basis-1/6'>N</div>
                            </div>
                            <div className="flex flex-row">
                              <div className='basis-1/6'>5</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>28-03-2024</div>
                              <div className='basis-1/6'>Mover2</div>
                              <div className='basis-1/6'>N</div>
                            </div>
                            <div className="flex flex-row">
                              <div className='basis-1/6'>6</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>ECS</div>
                              <div className='basis-1/6'>28-03-2024</div>
                              <div className='basis-1/6'>Mover2</div>
                              <div className='basis-1/6'>N</div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : null
                  } */}

                </Fragment>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Menu id={MENU_ID} preventDefaultOnKeydown={false} disableBoundariesCheck={false}>
        <Item onClick={() => { navigate({ pathname: "/ArchiveFolder" }, { state: RowSelection }) }}>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item  >
          Item 2
        </Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label="Submenu">
          <Item >
            Sub Item 1
          </Item>
          <Item >Sub Item 2</Item>
        </Submenu>
      </Menu>

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        position={"top center"}
        contentStyle={{ width: "820px", maxWidth: "820px" }}
      >
        <PopUppage closeModal={closeModal}/>
      </Popup>
    </div >
  );
}

