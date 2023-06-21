function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Button = ({ children, className, type }) => {
  return (
    <button
      className={classNames(
        ` text-sm px-6 rounded-md py-2 active:scale-95`,
        type === "secondary"
          ? `bg-white border border-primaryBlue text-primaryBlue`
          : `bg-primaryBlue text-white`,
        className && `${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
