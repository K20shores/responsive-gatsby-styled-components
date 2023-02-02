import React from 'react';
import { Menu, Footer } from '../';
import Theme from "../../theme";
import { StyledLayout, StyledContent } from './layout.styled';

const Layout = ({ children }) => {
  
  return (
    <Theme>
      <StyledLayout>
        <Menu/>
        <StyledContent>
          { children }
        </StyledContent>
        <Footer/>
      </StyledLayout>
    </Theme>
  )
}

export default Layout;