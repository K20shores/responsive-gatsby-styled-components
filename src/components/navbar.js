import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import hamburger from '../../static/hamburger.svg'

// modified from https://gist.github.com/berodam/a22ae39ddf599e30ff9f1a56ec09d849

const Bar = styled.nav`
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`
const Logo  = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  margin-left: 20px;
`
const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
`
const Hamburger = styled.img`
  content: url(${hamburger});
  @media (min-width: 768px) {
    display: none;
  }
`
class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
  }
  toggleNavBar() {
    this.setState((prevState, props) => {
      switch(prevState.displayNav) {
        case 'none':
          return { displayNav: 'flex'};          
        case 'flex':
        default:
          return { displayNav: 'none'}          
      }
    })
  }
  render() {
    return (
    <Bar>
      <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger />
      </NavBarToggle>
      <Logo href="#">logo</Logo>
      <MainNav display={this.state.displayNav}>
          <NavLi>
              <NavLink href="#" >Main</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#" >Search</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#" >Avocados</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#" >Login</NavLink>
          </NavLi>
      </MainNav>
    </Bar>
  )}
}

Navbar.propTypes = {
  // decides if we initially display the navbar open or not
  navVisibility: PropTypes.bool,
}

export default Navbar;