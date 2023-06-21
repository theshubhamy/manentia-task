import { Button, Typography } from "@/ui";
import Image from "next/image";
import Bell from "@/assets/svgs/bell.svg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function PricingPlan() {
  return (
    <div className="flex justify-between md:flex-row flex-col items-center  gap-8 md:gap-40  px-8 md:px-20 my-20 w-full">
      <div className="relative bg-[#F4F4F4]  w-full md:w-1/2 p-8 rounded-2xl aspect-auto  flex justify-center items-center">
        <div className="flex flex-col gap-9 items-center">
          <div className="max-w-xs">
            <Typography variant="Subheading1" className="text-center ">
              Lorem Ipsum is simply dummy text.
            </Typography>
          </div>
          <Typography
            variant="Paragraph"
            className="text-center text-[#545454]"
          >
            EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </Typography>
          <div>
            <Button type="primary">View More</Button>
          </div>
        </div>
      </div>
      <div className="relative  w-full md:w-1/2  p-8 rounded-2xl  aspect-auto flex justify-center items-center bg-primaryBlue">
        <div className="flex flex-col gap-9 items-center">
          <div className="max-w-xs">
            <Typography
              variant="Subheading1"
              className="text-center text-white"
            >
              Lorem Ipsum is simply dummy text.
            </Typography>
          </div>
          <Typography variant="Paragraph" className="text-center text-white">
            EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </Typography>
          <div>
            <Button type="secondary">View More</Button>
          </div>
        </div>
        <div className="absolute -right-6 -top-14 ">
          <Image
            src={Bell}
            height={120}
            width={120}
            alt="pricing_plan"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
