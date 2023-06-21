import { Typography, SocialIconButton } from "@/ui";

export default function Footer() {
  return (
    <>
      <div className=" w-full flex flex-col   px-20 justify-center m-auto items-center ">
        <div className="grid py-20 grid-cols-12 gap-8 items-center">
          <div className=" md:col-span-3 col-span-12 flex  flex-col gap-8 ">
            <span className=" flex text-3xl uppercase font-bold text-[#1090CB]">
              LOGO
            </span>
            <Typography variant="Paragraph" className="text-[#515151]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Typography variant="Paragraph" className="text-[#515151]">
              @Lorem
            </Typography>
          </div>

          <div className=" md:col-span-3 col-span-12 flex flex-col gap-6 ">
            <Typography
              variant="Paragraph"
              className="font-semibold text-black"
            >
              About Us
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="Paragraph" className="text-[#515151]">
                Lorem
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                Portfolio
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                Careers
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                Contact Us
              </Typography>
            </div>
          </div>
          <div className=" md:col-span-3 col-span-12 flex flex-col gap-6 ">
            <Typography
              variant="Paragraph"
              className="font-semibold text-black"
            >
              Contact Us
            </Typography>
            <div className="flex flex-col gap-5">
              <Typography variant="Paragraph" className="text-[#515151]">
                Lorem Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Typography>
              <Typography variant="Paragraph" className="text-[#515151]">
                +908 89097 890
              </Typography>
            </div>
          </div>
          <div className=" md:col-span-3 col-span-12 flex flex-col  item-start md:items-end md:justify-end ">
            <div className="flex flex-row items-center gap-4">
              <SocialIconButton social="fb" />
              <SocialIconButton social="insta" />
              <SocialIconButton social="twitter" />
              <SocialIconButton social="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="border w-full border-t-[#D2D2D2] flex justify-center items-center py-8">
        <Typography variant="Caption" className="text-[#686868]">
          Copyright ® 2021 Lorem All rights Received
        </Typography>
      </div>
    </>
  );
}
