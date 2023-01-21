import * as S from "./styles";

import { Facebook } from "../../logo/Logos";

const Aside = () => {
  return (
    <S.Container>
      <S.ImgContainer>
        <Facebook />
      </S.ImgContainer>
      <S.PhraseContainer>
        <S.Phrase>
          Facebook helps you connect and share with the people in your life.
        </S.Phrase>
      </S.PhraseContainer>
    </S.Container>
  );
};

export default Aside;
