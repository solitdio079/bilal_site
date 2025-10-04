import Navbar from "../comps/Navbar";
import type { Route } from "./+types/home";
import InfiniteEntity from "../comps/InfiniteEntity";
import PostCard from "../comps/PostCard";
import { serverUrl } from "../utils/serverUrl";
//import { Welcome } from "../welcome/welcome";
import myAvatar from "./my_avatar.jpg";
import herobg from "../images/04.JPG";
import herobgLg from "../images/02.JPG";
import img01 from "../images/01.JPG";
import img02 from "../images/02.JPG";
import img03 from "../images/03.JPG";
import img04 from "../images/04.JPG";
import img05 from "../images/05.JPG";
import img06 from "../images/06.JPG";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
//import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { motion } from "motion/react";
import About from "~/comps/About";
import Pricing from "~/comps/Pricing";
import Contact from "~/comps/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "buSolitdio New Website" },
    { name: "description", content: "Welcome to my new website!" },
  ];
}

export default function Home() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const dynamicEl = [
    {
      src: img01,
      responsive: img01,
      thumb: img01,
      subHtml: "01",
    },
    {
      src: img02,
      responsive: img02,
      thumb: img02,
      subHtml: "02",
    },
    {
      src: img03,
      responsive: img03,
      thumb: img03,
      subHtml: "03",
    },
    {
      src: img04,
      responsive: img04,
      thumb: img04,
      subHtml: "04",
    },
    {
      src: img05,
      responsive: img05,
      thumb: img05,
      subHtml: "05",
    },
    {
      src: img06,
      responsive: img06,
      thumb: img06,
      subHtml: "06",
    },

    // Add more placeholder images as needed
  ];
  return (
    <div>
      <div className="flex justify-start h-screen flex-col items-center gap-3 p-10 lg:p-20 lg:pt-40 relative">
        <img
          src={herobg}
          className="absolute w-full h-full top-0 block lg:hidden"
          alt=""
        />
        <img
          src={herobgLg}
          className="absolute w-full h-full top-0 hidden lg:block"
          alt=""
        />
        <p className="uppercase text-sm z-2 lg:bg-black lg:p-2">
          Web developer & UX DESIGNER
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-5xl font-bold z-2"
        >
          <FlipLink>Creativity</FlipLink>
        </motion.div>

        <p className="text-sm text-center z-2 lg:bg-black lg:p-2">
          I’m a Creative Designer and I make things work. Turning your dreams
          into reality.
        </p>

        <div className="flex gap-3 mt-10 z-2 lg:bg-black lg:p-2">
          <span className="icon-[tabler--brand-facebook] size-6"></span>
          <span className="icon-[tabler--brand-instagram] size-6"></span>
          <span className="icon-[tabler--brand-tiktok] size-6"></span>
          <span className="icon-[tabler--brand-twitter] size-6"></span>
        </div>

        <p className="text-xs text-white rotate-90 uppercase animate-bounce mt-50 flex items-center z-2">
          Scroll down{" "}
          <span className="icon-[tabler--arrow-right] size-4"></span>
        </p>
      </div>
      <About />
      <Pricing />
      <div className="p-10 lg:px-20 flex flex-col gap-6 items-center">
        <h1 className="font-black uppercase mb-4 text-3xl">Portfolio</h1>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="columns-1 md:columns-3 gap-4 space-y-4 "
      >
       

       {dynamicEl.map((el,index)=><img src={el.src} className={`hover:scale-110 transition-all duration-1500 intersect:motion-preset-slide-up motion-delay-${index*100}`} alt={el.subHtml} />)}
       
      </LightGallery>

      <button className="btn btn-primary uppercase">See More</button>

      </div>
      <Contact/>
     

     
    </div>
  );
}

function FlipLink({ children }) {
  return (
    <p
     
      className="relative text-center block overflow-hidden whitespace-nowrap font-black uppercase text-4xl sm:text-7xl md:text-8xl lg:text-9xl"
    >
      {" "}
      <div className="-motion-translate-y-loop-100 motion-duration-[2s] motion-ease-spring-smooth">
        {children}
      </div>{" "}
      <div
        className="absolute inset-0 motion-translate-y-loop-100 motion-duration-[2s] motion-ease-spring-smooth motion-delay-[1.75s]"
        
      >
        Universal
      </div>{" "}
    </p>
  );
}
