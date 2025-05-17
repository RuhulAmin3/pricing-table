import type { DefaultTheme } from "styled-components";

export const theme : DefaultTheme = {
  colors: {
    primaryColor: "#b78deb",
    primaryBgColor: "#ecebff",
    primaryHoverColor: "#6e41a6",
    infoColor: "#4cb3fd",
    infoHoverColor: "#1884d1",
    infoBgColor: "#e5f2ff",
    successColor: "#68cb9b",
    successBgColor: "#d8fdf0",
    successHoverColor: "#40a373",
    warningColor: "#ffb72c",
    warningBgColor: "#fff0d9",
    warningHoverColor: "#d69312",
    white: "#ffffff",
    textColor: "#49687e",
    dangerColor: "#ff424d",
    borderColor: "#eaeff2",
  },

  shadows: {
    tooltipShadow: "0 0 18px 0 rgba(73, 104, 126, .2)",
    dropdownShadow: "0 8px 16px rgba(0, 0, 0, .08)",
  },

  fonts: {
    Rubik: "Rubik, sans-serif",
  },

  spacing: {
    container: "15px",
    pageTop: "30px",
  },
  
  margins: {
    pageTop: "30px",
  },
  sizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "32px",
  },
};