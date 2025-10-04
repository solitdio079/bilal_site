import { Link } from "react-router";
import { useUserStore } from "../utils/stateStore";

export default function Navbar(){
  const user = useUserStore(state => state.user)
    return (<>
    <nav  className="navbar bg-base-100 max-sm:rounded-box max-sm:shadow-sm sm:border-b border-base-content/25 sm:z-1 relative">
  <div className="w-full md:flex md:items-center md:gap-2">
    <div className="flex items-center justify-between">
      <div className="navbar-start items-center justify-between max-md:w-full">
        <Link className="link text-base-content link-neutral text-4xl font-bold no-underline flex" to="/">bilson <span className="text-red-500 text-4xl">.</span> </Link>
        <div className="md:hidden">
          <button type="button" className="collapse-toggle btn btn-outline btn-primary btn-sm btn-square" data-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation" >
            <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
            <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
          </button>
        </div>
      </div>
    </div>
    <div id="navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
      <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
       
      
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>

        {!user.fullName ?  <li><Link to="/login">Login</Link></li> : <>
          <li><Link to="/admin">Account</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </>}
        <li><a href="#">Blog</a></li>
       
      </ul>
    </div>
  </div>
</nav>
    </>)
}