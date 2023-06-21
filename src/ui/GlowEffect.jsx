import styles from "../styles/custom.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const GlowEffect = ({ type = "Behind Bill", className }) => {
  if (type === "Purple") {
    return (
      <div
        className={classNames(
          `absolute -z-10 h-[450px] w-[450px] `,
          `${styles.glow_gradient_purple}`,
          className && `${className}`
        )}
      ></div>
    );
  }

  if (type === "Behind VR") {
    return (
      <div
        className={classNames(
          `absolute -z-10 h-[450px] w-[450px] `,
          `${styles.glow_gradient_purple_og}`,
          className && `${className}`
        )}
      ></div>
    );
  }
  return (
    <div
      className={classNames(
        `absolute -z-10 h-[450px] w-[450px] 
    `,
        `${styles.glow_gradient}`,
        className && `${className}`
      )}
    >
      <div
        className={classNames(
          `${styles.glow_gradient_yellow}`,
          `w-full h-full`
        )}
      ></div>
    </div>
  );
};

export default GlowEffect;
