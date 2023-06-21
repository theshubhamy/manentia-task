function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Typography = ({ children, variant, className }) => {
  return (
    <p
      className={classNames(
        `text-black `,
        variant === "Heading1" && `text-4xl font-bold`,
        variant === "Heading2" && `text-3xl font-semibold leading-[48px] `,
        variant === "Subheading1" && `text-2xl font-semibold leading-[40px]`,
        variant === "Subheading2" && `text-xl font-medium`,
        variant === "Subheading3" && `text-lg leading-[30px] font-medium`,
        variant === "Paragraph" &&
          `text-base font-normal text-[#5C5C5C] leading-[30px]`,
        variant === "Caption" &&
          `text-sm font-normal text-[#5C5C5C] leading-[24px]`,
        className && `${className}`
      )}
    >
      {children}
    </p>
  );
};

export default Typography;
