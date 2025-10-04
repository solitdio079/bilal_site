//import logo from "../logo.png"

import { Link } from "react-router";

export default function SplashScreen(){
    return (
    <div data-theme="black" className="flex w-full flex-col h-screen gap-3 justify-center items-center">
        <Link className="link text-base-content link-neutral text-4xl font-bold no-underline flex" to="/">bilson <span className="text-red-500 text-4xl">.</span> </Link>
        <span className="loading loading-infinity"></span>

    </div>
    )
}