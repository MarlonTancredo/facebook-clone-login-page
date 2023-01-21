import * as S from "./styles";

import Aside from "../components/aside/Aside";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const App = () => {
  return (
    <>
      <S.AppContainer>
        <S.AsideContainer>
          <Aside />
        </S.AsideContainer>
        <S.MainContainer>
          <Main />
        </S.MainContainer>
      </S.AppContainer>
      <S.Footer>
        <Footer createdBy="marlon tancredo" />
      </S.Footer>
    </>
  );
};

export default App;
