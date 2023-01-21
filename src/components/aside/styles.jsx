import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 112px 0 16px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    width: 300px;
  }
`;

export const Phrase = styled.h2`
  margin-top: 0;
  padding-left: 30px;
  font-size: 28px;
  font-weight: normal;
  line-height: 32px;
  width: 500px;
  @media (max-width: 1075px) {
    font-size: 24px;
  }
`;
