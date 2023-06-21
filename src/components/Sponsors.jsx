import Image from "next/image";
import BoneoShop from "@/assets/images/beneoshop.png";
import Caspio from "@/assets/images/caspio.png";
import HyperGrid from "@/assets/images/HyperGrid.png";
import Leotrippi from "@/assets/images/leotrippi.png";
import { Typography } from "@/ui";

export default function Sponsors() {
  return (
    <div className="flex justify-center items-center mb-32 mt-40">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <Typography
            variant="Subheading1"
            className="text-center font-medium leading-[38px]"
          >
            You will be in good Company
          </Typography>
        </div>
        {/** companies */}
        <div className="flex  flex-col md:flex-row items-center md:gap-32">
          <Image src={BoneoShop} alt="boneoshop" />
          <Image src={Caspio} alt="Caspio" />
          <Image src={HyperGrid} alt="HyperGrid" />
          <Image src={Leotrippi} alt="Leotrippi" />
        </div>
      </div>
    </div>
  );
}
