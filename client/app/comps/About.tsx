import aboutImg from "../images/07.jpg";

export default function About() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col min-w-1/2 gap-6 justify-center p-10 lg:p-20">
        <h1 className="text-3xl font-black uppercase intersect:motion-preset-slide-up motion-delay-0">About Us</h1>
        <p className="intersect:motion-preset-slide-up motion-delay-500">
          I’m a Graphic Designer and I make things work.without cross-media
          value. Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions. Completely synergize resource taxing relationships premier
          niche markets. Professionally cultivate one-to-one customer service
          with robust ideas.
        </p>
        <button className="btn btn-primary uppercase max-w-60 intersect:motion-preset-slide-up motion-delay-1000">See my work</button>
      </div>
      <img src={aboutImg} className="w-1/2 hidden lg:block intersect:motion-preset-slide-up motion-delay-1500" alt="" />
    </div>
  );
}
