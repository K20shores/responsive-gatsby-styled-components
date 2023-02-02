import React, { useState, useRef } from 'react';
import { StyledMenu, MainNav, NavLi } from './menu.styled';
import { Link } from 'gatsby'
import { Burger } from '../'
import { useOnClickOutside } from '../../hooks';

let locations = [
  {
    url: "/",
    title: "About"
  },
  {
    url: "/",
    title: "Store"
  },
  {
    url: "/",
    title: "Blog"
  },
]

const MenuItems = (props) => {
  return (
    locations.map((location, index) => (
      <NavLi key={index}>
        <Link to={location.url} tabIndex={props.tabIndex}>
          <span aria-hidden="true">{location.icon}</span>
          {location.title}
        </Link>
      </NavLi>
    ))
  )
}

const Menu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu ref={node}>
      <Link to='/'>
        Logo
      </Link>
      <MainNav open={open}>
        <MenuItems tabIndex={tabIndex}/>
      </MainNav>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
    </StyledMenu>
  )
}

Menu.propTypes = {
}

export default Menu;