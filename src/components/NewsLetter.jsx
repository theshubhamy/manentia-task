import { Button, Typography, Input } from "@/ui";
import Image from "next/image";
import PieChart from "@/assets/svgs/piechart.svg";
import Star from "@/assets/svgs/star.svg";

export default function NewsLetter() {
  return (
    <div className="relative w-full py-36 px-8 bg-bgLightBlue flex justify-center items-center">
      <div className="relative flex flex-col gap-20 items-center">
        <div className="hidden md:block absolute -top-[55px] -right-20">
          <Image src={PieChart} alt="pie " />
        </div>
        <div className="hidden md:block absolute -top-[195px] -left-[180px]">
          <Image src={Star} alt="Star" />
        </div>
        <div className="max-w-lg">
          <Typography variant="Heading2" className="text-center">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
        </div>

        <div className="w-full ">
          <div className=" flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=" min-w-md md:min-w-lg flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
