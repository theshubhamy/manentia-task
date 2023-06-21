import Card from "./Card";
import { GlowEffect } from "@/ui";
import FloatingIphone from "@/assets/images/floatingiphone.png";
import GuyWearingVRGlasses from "@/assets/images/guyvrglasses.png";
import WebsiteMockup from "@/assets/images/websitemockup.png";
export default function WorkDemo() {
  return (
    <div className="relative w-full pt-28  px-8 ">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8  items-center">
          <h2 className="text-2xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>

          <div className="text-center ">
            <p
              variant="Subheading3"
              className="text-[#868686] text-center font-normal"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-full m-auto mt-36">
        <Card
          image={FloatingIphone}
          className="-top-36 flex justify-between items-center md:flex-row flex-col"
        />
        <Card
          image={WebsiteMockup}
          className="-right-[30px]  flex justify-between items-center md:flex-row-reverse flex-col "
          Color="blue"
        />
        <Card
          image={GuyWearingVRGlasses}
          className="-bottom-[350px]  flex justify-between items-center md:flex-row flex-col"
          Color="purple"
        />
        {/** Purple Glow Effect Behind The guy with VR Glasses */}
        <GlowEffect
          type="Behind VR"
          className="-bottom-[360px] -right-[10px]"
        />
      </div>

      {/** Purple Glow Effect Right side to Iphone */}
      <GlowEffect
        type="Behind VR"
        className="z-20 top-[450px] -right-[150px]"
      />
    </div>
  );
}
