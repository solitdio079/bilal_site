import { Link } from "react-router";

export default function Pricing(){
    return(<div data-theme="black">
         <div className="p-10 lg:p-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div>
            <div className="space-y-4">
              <p className="text-white text-sm font-medium uppercase intersect:motion-preset-slide-up motion-delay-0">
                Pricing Details
              </p>
              <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl intersect:motion-preset-slide-up motion-delay-500">
                Services
              </h2>
              <p className="text-base-content/80 text-xl intersect:motion-preset-slide-up motion-delay-1000">
              I’m a Creative Designer and I make things work.
              Turning your dreams into reality.
              </p>
            </div>
          </div>

          <div className="grid gap-6 justify-center md:justify-stretch my-12">
            <div className="card p-5 sm:card-side max-w-sm sm:max-w-full intersect:motion-preset-slide-up motion-delay-0">
              <div className="flex justify-start h-fit">
                <Link
                  to={"#"}
                  className="w-fit h-fit p-3 bg-primary/25 rounded-lg"
                >
                  <span className="icon-[tabler--leaf]  text-white size-10 rtl:rotate-180"></span>
                </Link>
              </div>

              <div className="card-body flex flex-col gap-6 px-0 md:py-0 md:px-5">
                <div>
                  <h5 className="card-title mb-0.5">Starter Plan</h5>
                  <p className="mb-2">Best For Beginners</p>
                </div>

                <div className="">
                  <h3 className="text-white font-bold text-xl">
                    {" "}
                    Save up to 9%
                  </h3>
                  <p>
                    <span className="text-4xl font-bold">$99</span> /month
                  </p>
                </div>
              </div>
              <ul className="flex flex-col justify-between  lg:mx-5">
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    1x Business Account & Cards
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    1x Account
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    30 transfer or direct debit
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    10+ Integrations
                  </h5>
                </li>
              </ul>
              <div className="card-actions flex flex-col justify-center lg:items-center my-5 lg:mr-24">
                <button className="btn  btn-outline">
                  Try for 15 Day's
                </button>
                <button className="btn btn-primary btn-soft">
                  {" "}
                  Get started{" "}
                  <span className="icon-[tabler--rocket]  text-white size-5 rtl:rotate-180"></span>
                </button>
              </div>
            </div>


            <div className="card p-5 sm:card-side max-w-sm sm:max-w-full intersect:motion-preset-slide-up motion-delay-500">
              <div className="flex justify-start h-fit">
                <Link
                  to={"#"}
                  className="w-fit h-fit p-3 bg-primary/25 rounded-lg"
                >
                  <span className="icon-[tabler--tree]  text-white size-10 rtl:rotate-180"></span>
                </Link>
              </div>

              <div className="card-body flex flex-col gap-6 px-0 md:py-0 md:px-5">
                <div>
                  <h5 className="card-title mb-0.5">
                  Professional Plan</h5>
                  <p className="mb-2">Ideal for Growing Businesses</p>
                </div>

                <div className="">
                  <h3 className="text-white font-bold text-xl">
                    {" "}
                    Save up to 15%
                  </h3>
                  <p>
                    <span className="text-4xl font-bold">$199</span> /month
                  </p>
                </div>
              </div>
              <ul className="flex flex-col justify-between  lg:mx-5">
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    2x Premium Business Account & Cards
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    1x Savings Account
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    3x Standard Business Accounts
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    5x Personal Savings Accounts
                  </h5>
                </li>
              </ul>
              <div className="card-actions flex flex-col justify-center lg:items-center my-5 lg:mr-24">
                <button className="btn  btn-outline">
                  Try for 15 Day's
                </button>
                <button className="btn btn-primary btn-soft">
                  {" "}
                  Get started{" "}
                  <span className="icon-[tabler--rocket]  text-white size-5 rtl:rotate-180"></span>
                </button>
              </div>
            </div>

            <div className="card p-5 sm:card-side max-w-sm sm:max-w-full intersect:motion-preset-slide-up motion-delay-1000">
              <div className="flex justify-start h-fit">
                <Link
                  to={"#"}
                  className="w-fit h-fit p-3 bg-primary/25 rounded-lg"
                >
                  <span className="icon-[tabler--plant]  text-white size-10 rtl:rotate-180"></span>
                </Link>
              </div>

              <div className="card-body flex flex-col gap-6 px-0 md:py-0 md:px-5">
                <div>
                  <h5 className="card-title mb-0.5">Enterprise Plan</h5>
                  <p className="mb-2">Tailored for Large Companies</p>
                </div>

                <div className="">
                  <h3 className="text-white font-bold text-xl">
                    {" "}
                    Save up to 20%
                  </h3>
                  <p>
                    <span className="text-4xl font-bold">$499</span> /month
                  </p>
                </div>
              </div>
              <ul className="flex flex-col justify-between  lg:mx-5">
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    Unlimited Online Banking Access
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    5x ATM Withdrawals per Month
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    1x International Money Transfer
                  </h5>
                </li>
                <li>
                  {" "}
                  <h5 className="items-center flex gap-4 my-2">
                    <span className="icon-[tabler--circle-check] text-white size-6 rtl:rotate-180"></span>
                    No Monthly Maintenance Fees
                  </h5>
                </li>
              </ul>
              <div className="card-actions flex flex-col justify-center lg:items-center my-5 lg:mr-24">
                <button className="btn btn-outline">
                  Try for 15 Day's
                </button>
                <button className="btn btn-primary btn-soft">
                  {" "}
                  Get started{" "}
                  <span className="icon-[tabler--rocket]  text-white size-5 rtl:rotate-180"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}