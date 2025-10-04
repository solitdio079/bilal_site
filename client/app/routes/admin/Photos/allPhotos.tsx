import { Form, Link, redirect, useFetcher, useNavigate } from "react-router"
import { serverUrl } from "~/utils/serverUrl"

import { useUserStore } from "~/utils/stateStore";
import toast, {Toaster} from "react-hot-toast";
import {
    useReactTable,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
  } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import type { Route } from "./+types/allPhotos";

export async function clientLoader(){
    const token = localStorage.getItem("token")
    if(!token) return redirect("/login")

    try {
        const req = await fetch(serverUrl + "/photos/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await req.json()
        return response
        
    } catch (error) {
        return {error}
    }


}
// TData
type Photo = {
    _id: string;
    image: string
   
  };
  

export default function AllPhotos({loaderData}:Route.ComponentProps){
    const fetcher = useFetcher();
    const columnHelper = createColumnHelper<Photo>();
    const user = useUserStore((state) => state.user);
    const [data, setData] = useState<Photo[]>(loaderData);
    const navigate = useNavigate()

    const [globalFilter, setGlobalFilter] = useState<any>([]);

    const columns = useMemo(
        () => [
          columnHelper.accessor((row) => `${row.image}`, {
            id: "cover",
            cell: (info) => {
              return (
                <img className="w-20" src={serverUrl + "/" + info.getValue()} />
              );
            },
          }),
         
          
         
          columnHelper.accessor((row) => `${row._id}`, {
            id: "delete",
            cell: ({ cell, row }) => {
              return (
                <fetcher.Form method="post" action={`/admin/deletePhoto/${row.original._id}`}><button className="btn btn-error"> {fetcher.state === "idle" ? <span className="icon-[tabler--x] text-base-content size-6"></span> : <span className="loading loading-ball"></span>}</button> </fetcher.Form>
              );
            },
          }),
          
        ],
        []
      );
      const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
          pagination: {
            pageIndex: 0, //custom initial page index
            pageSize: 5, //custom default page size
          },
        },
        state: {
          globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
      });

      useEffect(() => {
        if (user.email !== "solitdio079@gmail.com") {
          navigate("/admin");
        }
        const toastOptions = { duration: 5000 };
    
        if (fetcher.data && fetcher.data.msg) {
            setData((prev) => prev.filter(item => item._id !== fetcher.data.oldPost._id))
            toast.dismiss()
            toast.success(fetcher.data.msg, toastOptions);
        } else if (fetcher.data && fetcher.data.error) {
          toast.error(fetcher.data.error, toastOptions);
        }
      }, [fetcher.data]);
    
    return (<>
     <div className="flex flex-col p-10 max-w-full overflow-x-auto">
      <div className="w-full flex gap-3 justify-between">
        <div>
          <input
            type="text"
            onChange={(e) => table.setGlobalFilter(String(e.target.value))}
            placeholder="Search..."
            className="input max-w-60"
          />
        </div>
       
      </div>
      <div className="w-full overflow-x-auto">
        <Toaster />

        <table className="table">
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-2">
        <button
        className="btn btn-info"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
         className="btn btn-info"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
         className="btn btn-info"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
         className="btn btn-info"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
      </div>
    </>)
}