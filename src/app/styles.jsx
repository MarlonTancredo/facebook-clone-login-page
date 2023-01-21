import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const AsideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 830px) {
    margin-top: 20px;
  }
`;
