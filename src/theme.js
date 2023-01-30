import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  // https://coolors.co/95a3a4-14591d-0a0908-ff6663-3d3b8e
  colors: {
    grey: "#95a3a4ff", // cadet grey
    green: "#14591dff", // lincon green
    black: "#0a0908ff", // rich black fogra
    red: "#ff6663ff", // bittersweet
    blue: "#3d3b8eff", // dark slate blue
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  breakpoints : {
    mobile: '420px',
    tablet: '768px',
    desktop: '1280px',
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
