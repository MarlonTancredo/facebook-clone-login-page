import styled from "styled-components";

//Aside and main conatainer styles.
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

//Aside container styles.
export const AsideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

//Main container styles.
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

//Footer container styles.
export const Footer = styled.div`
  margin-top: 200px;
  text-align: center;
`;
