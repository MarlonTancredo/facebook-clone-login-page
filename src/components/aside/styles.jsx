import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 830px) {
    align-self: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    width: 300px;
  }
  @media (max-width: 830px) {
    align-self: center;
  }
`;

export const PhraseContainer = styled.div`
  display: flex;
`;

export const Phrase = styled.h2`
  margin-top: 0;
  padding-left: 30px;
  font-size: 28px;
  font-weight: normal;
  line-height: 32px;
  width: 500px;
  @media (max-width: 990px) {
    font-size: 24px;
    line-height: 24px;
    width: 400px;
  }
`;
