import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Redirect(){
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate("/admin/allPhotos"),1000)
    })
    return (<>
    <p>Photo deleted</p>
    </>)
}