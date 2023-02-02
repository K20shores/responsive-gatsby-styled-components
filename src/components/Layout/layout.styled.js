import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export {
  StyledContent,
  StyledLayout
}