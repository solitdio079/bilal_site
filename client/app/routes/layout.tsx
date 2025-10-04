import { Outlet } from "react-router";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";

export default function Layout(){
    return (<div data-theme="black">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>)
}