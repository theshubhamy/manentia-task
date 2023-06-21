import Image from "next/image";
import HappyIcon from "@/assets/svgs/happy.svg";
import { Typography } from "@/ui";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Card = ({ className, Color = "green", image }) => {
  return (
    <div className={classNames(`w-full `, className && `${className}`)}>
      <div className="flex flex-col gap-8  w-full md:w-1/2">
        {/** header portion */}
        <div className="flex flex-row items-center gap-6">
          <div
            className={classNames(
              "h-14 w-14 rounded-full bg-[#08D3BB] flex justify-center items-center",
              Color === "blue" && `bg-primaryBlue`,
              Color === "purple" && `bg-[#9208D3]`
            )}
          >
            <Image src={HappyIcon} alt="happy-icon" height={26} width={26} />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="Subheading3">
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography variant="Caption" className="text-[#868686]">
              Lorem Ipsum is simply dummy text
            </Typography>
          </div>
        </div>

        <div className=" flex flex-col gap-8 md:px-8">
          <Typography variant="Heading2">
            <span className="text-primaryBlue">Lorem Ipsum</span> is simply
            dummy text of the printing.
          </Typography>

          <Typography variant="Paragraph" className="text-[#545454]">
            EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </Typography>
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex justify-center">
        <Image src={image} alt="floating-iphone" />
      </div>
    </div>
  );
};

export default Card;
