import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';

let locations = [
  {
    url: "/",
    icon: "💁🏻‍",
    title: "About Us"
  },
  {
    url: "/",
    icon: "💸",
    title: "Pricing"
  },
  {
    url: "/",
    icon: "📩",
    title: "About Us"
  },
  {
    url: "/",
    icon: "📩",
    title: "Contact"
  },
]

const MenuItems = (props) => {
  return (
    locations.map((location, index) => (
      <a href={location.url} tabIndex={props.tabIndex} key={index}>
        <span aria-hidden="true">{location.icon}</span>
        {location.title}
      </a>
    ))
  )
}

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <MenuItems tabIndex={tabIndex}/>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;