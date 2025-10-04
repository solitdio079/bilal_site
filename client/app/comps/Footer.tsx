import { Link } from "react-router";

export default function Footer(){
    return (<>
    <footer className="footer bg-base-200/60 px-6 py-4">
  <div className="flex w-full flex-wrap items-center justify-between">
    <div className="flex items-center gap-2 text-xl font-bold text-base-content">
    <Link className="link text-base-content link-neutral text-2xl font-bold no-underline flex" to="/">bilson <span className="text-red-500 text-2xl">.</span> </Link>
    </div>
    <aside className="grid-flow-col items-center">
      <p className="flex items-center gap-3 "> ©2024  <Link className="link text-base-content link-neutral text-xl font-bold no-underline flex" to="/">bilson <span className="text-red-500 text-xl">.</span> </Link> </p>
    </aside>
    <div className="flex h-5 gap-4">
      <a href="#" className="link" aria-label="Github Link">
        <span className="icon-[tabler--brand-github] size-5"></span>
      </a>
      <a href="#" className="link" aria-label="Facebook Link">
        <span className="icon-[tabler--brand-facebook] size-5"></span>
      </a>
      <a href="#" className="link" aria-label="X Link">
        <span className="icon-[tabler--brand-x] size-5"></span>
      </a>
      <a href="#" className="link" aria-label="Google Link">
        <span className="icon-[tabler--brand-google] size-5"></span>
      </a>
    </div>
  </div>
</footer>
    </>)
}