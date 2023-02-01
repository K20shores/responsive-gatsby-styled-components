import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitionSpeed}s linear;
    &:hover {
      color: blue;
    }
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  transition: transform ${({ theme }) => theme.transitionSpeed}s linear;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.grey};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`
const NavLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    margin: 0;
  }
` 

export {
  StyledMenu,
  MainNav,
  NavLi,
}