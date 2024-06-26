import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      text: "#222" | "#fff";
      bg: "#fff" | "#222";
      primary: "#64FFC8";
      sub: "#FFC8C8";
      darkgray: "#444";
    };
    border: {
      base: "1.5px solid #fff;" | "1.5px solid #222;" | string;
      roundedFull: "1000rem";
    };
    font: {
      light: "300";
      base: "500";
      bold: "700";
    };
    text: {
      xs: "0.75rem";
      sm: "0.875rem";
      md: "1rem";
      lg: "1.25rem";
      xl: "1.5rem";
      xxl: "2rem";
    };
    transition: {
      base: "all 0.15s ease-in-out;";
    };
    boxShadow: {
      normal: "0 3px 10px 0 rgb(0 0 0 / 20%)";
      strong: "0 3px 24px 0 rgb(0 0 0 / 35%)";
      primary: "0 3px 10px 0 #64FFC8";
      sub: "0 3px 10px 0 #FFC8C8";
    };
  }
}
