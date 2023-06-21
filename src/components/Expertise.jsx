import Image from "next/image";
import { Typography } from "@/ui";
import webApp from "@/assets/svgs/web_application.svg";
import seoImage from "@/assets/svgs/seo_tag.svg";
import ArVrImage from "@/assets/svgs/vr.svg";
import MobileApp from "@/assets/svgs/coding.svg";
let expData = [
  {
    id: 1,
    title: "Web Application",
    desc: "Lorem Ipsum is simply",
    image: webApp,
    bgcolor: "#EFEAFF",
  },
  {
    id: 2,
    title: "SEO",
    desc: "Lorem Ipsum is simply",
    image: seoImage,
    bgcolor: "#ECFFDA",
  },
  {
    id: 3,
    title: "AR/VR Solutions",
    desc: "Lorem Ipsum is simply",
    image: ArVrImage,
    bgcolor: "#DAE6FF",
  },
  {
    id: 4,
    title: "Mobile Applications",
    desc: "Lorem Ipsum is simply",
    image: MobileApp,
    bgcolor: "#FFE5DA",
  },
];
export default function Expertise() {
  return (
    <div className="w-full py-10 border px-8 md:px-20  border-b-neutral-200  ">
      <div className="flex flex-wrap flex-col md:flex-row  justify-between items-center gap-8">
        {expData.map((item) => (
          <div key={item.id} className="flex flex-row items-center gap-4 ">
            <div className={`p-5 rounded-[20px] bg-[${item.bgcolor}]`}>
              <Image src={item.image} height={36} width={36} alt={item.title} />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="Subheading2">{item.title}</Typography>
              <Typography variant="Paragraph" className="text-[#969696]">
                {item.desc}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
