import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  transition: all ${({ theme }) => theme.transitionSpeed}s linear;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.colors.green : theme.colors.grey};
    border-radius: 10px;
    transition: all ${({ theme }) => theme.transitionSpeed}s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;