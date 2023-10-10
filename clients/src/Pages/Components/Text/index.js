import React from "react";

const sizeClasses = {
  txtHelveticaBold32: "font-bold font-helvetica",
  txtWorkSansRomanRegular9: "font-normal font-worksans",
  txtDMSansBold15GreenA700: "font-bold font-dmsans",
  txtHelveticaLight22: "font-helvetica font-light",
  txtAvenirNextBold26Gray90002: "font-avenirnext font-bold",
  txtDMSansMedium22: "font-dmsans font-medium",
  txtDMSansBold2398: "font-bold font-dmsans",
  txtWorkSansRomanMedium16: "font-medium font-worksans",
  txtWorkSansSemiBold18: "font-semibold font-worksans",
  txtDMSansBold15: "font-bold font-dmsans",
  txtHelveticaBold42: "font-bold font-helvetica",
  txtMontserratRomanBold16: "font-bold font-montserrat",
  txtDMSansBold2398Black900: "font-bold font-dmsans",
  txtDMSansBold10: "font-bold font-dmsans",
  txtDMSansRegular32: "font-dmsans font-normal",
  txtHelveticaBold40: "font-bold font-helvetica",
  txtAvenirNextRegular26: "font-avenirnext font-normal",
  txtAvenirNextBold199: "font-avenirnext font-bold",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
  txtDMSansRegular15WhiteA70087: "font-dmsans font-normal",
  txtOpenSansRegular16Bluegray400: "font-normal font-opensans",
  txtHelveticaBold18Bluegray700: "font-bold font-helvetica",
  txtSourceSerifProIt24: "font-normal font-sourceserifpro italic",
  txtPoppinsRegular11AmberA700: "font-normal font-poppins",
  txtAvenirNextDemiBold26: "font-avenirnext font-semibold",
  txtHelveticaBold18: "font-bold font-helvetica",
  txtHelveticaBold14: "font-bold font-helvetica",
  txtHelveticaBold14WhiteA700: "font-bold font-helvetica",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtWorkSansRomanRegular16: "font-normal font-worksans",
  txtWorkSansRomanRegular135: "font-normal font-worksans",
  txtPoppinsRegular11DeeporangeA700: "font-normal font-poppins",
  txtWorkSansSemiBold36: "font-semibold font-worksans",
  txtWorkSansRomanRegular14: "font-normal font-worksans",
  txtAvenirNextBold1504: "font-avenirnext font-bold",
  txtHelveticaBold14Purple800: "font-bold font-helvetica",
  txtHelveticaLight18: "font-helvetica font-light",
  txtHelveticaLight14: "font-helvetica font-light",
  txtInterSemiBold14: "font-inter font-semibold",
  txtHelveticaBold24: "font-bold font-helvetica",
  txtSourceSerifProRegular20: "font-normal font-sourceserifpro",
  txtHelvetica18: "font-helvetica font-normal",
  txtWorkSansRomanRegular14Gray90003: "font-normal font-worksans",
  txtAvenirNextBold26: "font-avenirnext font-bold",
  txtWorkSansSemiBold24: "font-semibold font-worksans",
  txtDMSansRegular12: "font-dmsans font-normal",
  txtHelvetica14: "font-helvetica font-normal",
  txtDMSansRegular15: "font-dmsans font-normal",
  txtHelvetica12: "font-helvetica font-normal",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtHelveticaBold14Pink500: "font-bold font-helvetica",
  txtDMSansRegular17: "font-dmsans font-normal",
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
