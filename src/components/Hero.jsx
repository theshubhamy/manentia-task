import { Button, GlowEffect, Typography, Decorator } from "@/ui";
import Image from "next/image";
import BillLaptop from "@/assets/svgs/BillLaptop.png";
import FlowerTub from "@/assets/svgs/flowertub.svg";
import BigPlant from "@/assets/svgs/bigplant.svg";
import Brick from "@/assets/svgs/brick.svg";
export default function Hero() {
  return (
    <div className="relative w-full bg-primaryBlue/10  px-8 md:px-20">
      <div className="relative max-w-full m-auto pt-20 flex justify-between items-center flex-col md:flex-row gap-20 ">
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h1 className=" text-3xl md:text-5xl font-bold">
            Experienced{" "}
            <span className="text-primaryBlue"> mobile and web </span>{" "}
            applications and website builders measuring.
          </h1>

          <Typography variant="Paragraph">
            EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </Typography>
          <div className="flex flex-row items-center gap-2 ">
            <Button>Contact Us</Button>
            <Button type="secondary" className={"border border-[#1090CB]"}>
              View More
            </Button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-[600px]">
          <div className="absolute top-[70px] left-[90px]">
            <Image
              src={BillLaptop}
              height={100}
              width={450}
              alt="Bill Sitting with Laptop"
              className="z-20"
              unoptimized
            />
          </div>
          <div className="absolute top-[90px] left-[90px]">
            <Image
              src={FlowerTub}
              height={50}
              width={50}
              alt="flower tub"
              unoptimized
            />
          </div>
          <div className="absolute bottom-[148px] right-[0px]">
            <Image
              src={BigPlant}
              height={200}
              width={150}
              alt="big plant"
              unoptimized
            />
          </div>
          <div className="absolute right-[20px] top-[0px]">
            <Image src={Brick} height={75} width={75} alt="brick" unoptimized />
          </div>
        </div>
        <GlowEffect className="-right-[25px] top-[20px]" />
        <GlowEffect type="Purple" className="-left-[150px] top-[20px]" />
      </div>
      <Decorator variant="left" className="-bottom-[160px] left-[0px]" />
      <Decorator variant="right" className="bottom-[50px] right-[0px]" />
    </div>
  );
}
