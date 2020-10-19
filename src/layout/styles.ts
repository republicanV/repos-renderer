import styled from "styled-components";

export const Content = styled.main`
  flex: auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
  padding: ${(props) => props.theme.spaces.default};
`;
