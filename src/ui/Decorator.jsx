import Image from "next/image";
import leftellipse from "@/assets/svgs/leftellipse.svg";
import Rightellipse from "@/assets/svgs/rightellipse.svg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Decorator = ({ variant, className }) => {
  if (variant === "left")
    return (
      <div className={classNames(`absolute`, className)}>
        <Image src={leftellipse} alt="left decorator" />
      </div>
    );
  else {
    return (
      <div className={classNames(`absolute`, className)}>
        <Image src={Rightellipse} alt="left decorator" />
      </div>
    );
  }
};

export default Decorator;
