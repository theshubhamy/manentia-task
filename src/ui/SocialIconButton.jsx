import Image from "next/image";

import FacebookIcon from "@/assets/svgs/facebook.svg";
import InstaIcon from "@/assets/svgs/instagram1.svg";
import LinkedinIcon from "@/assets/svgs/linkedin.svg";
import TwitterIcon from "@/assets/svgs/twitter.svg";

export default function SocialIconButton({ social }) {
  return (
    <button className="h-10 w-10 p-2 rounded-full flex justify-center items-center bg-white shadow">
      {social === "fb" && (
        <Image
          src={FacebookIcon}
          height={16}
          width={16}
          alt="facebook icon"
          className=""
        />
      )}
      {social === "insta" && (
        <Image
          src={InstaIcon}
          height={16}
          width={16}
          alt="insta icon"
          className=""
        />
      )}
      {social === "twitter" && (
        <Image
          src={TwitterIcon}
          height={16}
          width={16}
          alt="twitter icon"
          className=""
        />
      )}
      {social === "linkedin" && (
        <Image
          src={LinkedinIcon}
          height={16}
          width={16}
          alt="linkedin icon"
          className=""
        />
      )}
    </button>
  );
}
