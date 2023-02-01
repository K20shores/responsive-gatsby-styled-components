import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './global';

const theme = {
  // https://coolors.co/00ad43-cacfd6-2f2504-594e36-29339b
  colors: {
    green:"#00ad43", // Green Pantone
    grey :"#00000055", // Light Slate Gray
  },
  transitionSpeed: 0.4,
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

const Theme = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Theme;
