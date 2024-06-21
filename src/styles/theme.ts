import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    color: {
        bg: "#fff",
        text: "#222",
        primary: "#64FFC8",
        sub: "#FFC8C8",
        darkgray: "#444",
    },
    border: {
        base: "1.5px solid #222;",
        roundedFull: "1000rem",
    },
    font: {
        light: "300",
        base: "500",
        bold: "700",
    },
    text: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "2rem",
    },
    transition: {
        base: "all 0.15s ease-in-out;",
    },
    boxShadow: {
        normal: "0 3px 10px 0 rgb(0 0 0 / 20%)",
        strong: "0 3px 24px 0 rgb(0 0 0 / 35%)",
        primary: "0 3px 10px 0 #64FFC8",
        sub: "0 3px 10px 0 #FFC8C8",
    },
};

export const darkTheme: DefaultTheme = {
    color: {
        bg: "#222",
        text: "#fff",
        primary: "#64FFC8",
        sub: "#FFC8C8",
        darkgray: "#444",
    },
    border: {
        base: "1.5px solid #fff;",
        roundedFull: "1000rem",
    },
    font: {
        light: "300",
        base: "500",
        bold: "700",
    },
    text: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "2rem",
    },
    transition: {
        base: "all 0.15s ease-in-out;",
    },
    boxShadow: {
        normal: "0 3px 10px 0 rgb(0 0 0 / 20%)",
        strong: "0 3px 24px 0 rgb(0 0 0 / 35%)",
        primary: "0 3px 10px 0 #64FFC8",
        sub: "0 3px 10px 0 #FFC8C8",
    },
};

const customMediaQuery = (maxWidth: number): string =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    pc: customMediaQuery(1280),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(420),
};
