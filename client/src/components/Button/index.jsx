import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    blue_gray_300: "bg-blue_gray-300 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs",
    deep_purple_500: "bg-deep_purple-500",
    gray_50: "bg-gray-50",
  },
  outline: {
    purple_800_indigo_800: "border border-solid purple_800_indigo_800_border",
  },
  gradient: { purple_800_indigo_800: "bg-gradient  text-white-A700" },
};
const sizes = { xs: "p-0.5", sm: "p-[5px]", md: "p-[9px]", lg: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
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
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "blue_gray_300",
    "white_A700",
    "deep_purple_500",
    "gray_50",
    "purple_800_indigo_800",
  ]),
};

export { Button };
