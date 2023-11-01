import React from "react";

const sizeClasses = {
  txtLatoSemiBold14: "font-lato font-semibold",
  txtLatoBold14: "font-bold font-lato",
  txtLatoSemiBold20: "font-lato font-semibold",
  txtLatoBold18: "font-bold font-lato",
  txtLatoRegular18: "font-lato font-normal",
  txtInterSemiBold12: "font-inter font-semibold",
  txtLatoSemiBold18: "font-lato font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtLatoMedium14: "font-lato font-medium",
  txtLatoRegular12: "font-lato font-normal",
  txtInterRegular12: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
