import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  gradient: {
    pink_500_deep_orange_100: "bg-gradient1  text-white-A700",
    purple_800_indigo_800: "bg-gradient  text-white-A700",
  },
  fill: {
    indigo_900: "bg-indigo-900 text-white-A700",
    indigo_A200_01: "bg-indigo-A200_01 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs",
    indigo_A200_0c: "bg-indigo-A200_0c text-indigo-A200_01",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-[13px]", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "pink_500_deep_orange_100",
    "purple_800_indigo_800",
    "indigo_900",
    "indigo_A200_01",
    "white_A700",
    "indigo_A200_0c",
  ]),
};

export default Button;
