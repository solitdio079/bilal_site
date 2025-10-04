import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
//import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import img01 from "../images/01.JPG";
import img02 from "../images/02.JPG";
import img03 from "../images/03.JPG";
import img04 from "../images/04.JPG";
import img05 from "../images/05.JPG";
import img06 from "../images/06.JPG";
import { redirect } from "react-router";
import { serverUrl } from "~/utils/serverUrl";
import type { Route } from "./+types/portfolio";

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
type Photo = {
    _id: string;
    image: string
   
  };

export default function Portfolio({loaderData}:Route.ComponentProps){
     const onInit = () => {
        console.log("lightGallery has been initialized");
      };
      const dynamicEl = loaderData.map((el:Photo) => {
      return {   src: el.image,
        responsive: el.image,
        thumb: el.image,
       }
      }) 
    return(<>
     <div className="p-10 lg:px-20 flex flex-col gap-6 items-center">
        <h1 className="font-black uppercase mb-4 text-3xl">Portfolio</h1>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="columns-1 md:columns-3 gap-4 space-y-4"
      >
       

       {dynamicEl.map((el,index)=><img src={serverUrl+"/"+ el.src} className={`hover:scale-110 transition-all duration-1500 intersect:motion-preset-slide-up motion-delay-${index*100}`} alt={el.subHtml} />)}
       
      </LightGallery>

      </div>
    </>)
}