import { Form, Link } from "react-router";

export default function Contact() {
  return (
    <div data-theme="black" className=" py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <span className="uppercase"> get in touch with us</span>
          <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
            Have Questions? Get in Touch!
          </h2>
          <p className="text-base-content text-md md:text-lg lg:text-xl">
            Our team is ready to help—connect with us to learn more about our
            services and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-6 lg:px-8 my-12 mx-auto">
          <div className="card card-border shadow-none intersect:motion-preset-slide-up motion-delay-0">
            <div className="p-5 gap-5 flex flex-row">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--send] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <div>
                <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
                <p className="mb-4">sales@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none intersect:motion-preset-slide-up motion-delay-500">
            <div className="p-5 gap-5 flex flex-row">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--messages] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <div>
                <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
                <p className="mb-4">johndoe@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none intersect:motion-preset-slide-up motion-delay-1000">
            <div className="p-5 gap-5 flex flex-row">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--map-pin] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <div>
                <h5 className="card-title mb-2.5 text-xl">Chat to Sales</h5>
                <p className="mb-4">View on maps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 intersect:motion-preset-slide-up motion-delay-0">
          <div className=" md:block md:col-span-2 intersect:motion-preset-slide-up motion-delay-1000" style={{ width: "100%" }}>
            <iframe
              width="100%"
              className="h-80 md:h-[650px] rounded-lg"
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                Carte démographique
              </a>
            </iframe>
          </div>
         
          <div className="md:-ml-24 self-center intersect:motion-preset-slide-up motion-delay-1500">
            <Form className="p-5 shadow-md grid gap-6 sm:max-w-full grid-cols-1 bg-base-200 rounded-lg">
              <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit sm:mb-8 lg:mb-12">
                <h2 className="text-base-content text-lg font-bold md:text-xl lg:text-2xl">
                  Send us a message
                </h2>
                <p className="text-base-content text-center text-md">
                  Get in touch with us for any inquiries or support. We're here
                  to assist you and ensure your experience is exceptional.
                </p>
              </div>
              <div className="input">
                <div className="input-floating grow">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Djoko Keita"
                    id="fullName"
                  />
                  <label
                    className="input-floating-label ms-0"
                    htmlFor="fullName"
                  >
                    Full name
                  </label>
                </div>
                <span className="icon-[tabler--user] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
              </div>

              <div className="input">
                <div className="input-floating grow">
                  <input
                    type="email"
                    className="grow"
                    placeholder="abc@gmail.com"
                    id="email"
                  />
                  <label className="input-floating-label ms-0" htmlFor="email">
                    Email
                  </label>
                </div>
                <span className="icon-[tabler--mail] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
              </div>
              <div className="textarea">
                <div className="textarea-floating grow">
                  <textarea
                    className="resize-none"
                    placeholder="Hello!!!"
                    id="textareaFloatingMedium"
                  ></textarea>
                  <label
                    className="textarea-floating-label"
                    htmlFor="textareaFloatingMedium"
                  >
                    Message
                  </label>
                </div>
                <span className="icon-[tabler--message] text-base-content/80 mt-2 mx-4 size-5 shrink-0"></span>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-next"
                data-stepper-next-btn=""
              >
                <span className="">Get Free Quote</span>
              </button>
              <p className="my-3 text-center">
                I understand that my data will be hold securely in accordance
                with the privacy policy
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
