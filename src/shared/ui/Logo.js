import React from "react";
import SvgUri from "react-native-svg-uri";

export const Logo = () => {
  return (
    <SvgUri
      width="290"
      height="96"
      // eslint-disable-next-line no-undef
      source={require("../../assets/Bollywood Hero.svg")}
    />
  );
};
