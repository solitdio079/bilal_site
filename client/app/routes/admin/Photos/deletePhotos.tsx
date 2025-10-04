import { redirect } from "react-router";
import { serverUrl } from "~/utils/serverUrl";
import type { Route } from "./+types/deletePhotos";

export async function clientAction({params}:Route.ClientActionArgs){
    const {id} = params
    const token = localStorage.getItem("token")

    if(!token) return redirect("/login")

    try {
        const req = await fetch(serverUrl + `/photos/${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await req.json()
        return redirect("/admin/redirectPhotos")
        
    } catch (error) {
        return {error}
    }

}