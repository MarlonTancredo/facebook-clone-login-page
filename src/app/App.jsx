import * as S from "./styles";

import Aside from "../components/aside/Aside";
import Main from "../components/main/Main";

const App = () => {
  return (
    <S.AppContainer>
      <S.AsideContainer>
        <Aside />
      </S.AsideContainer>
      <S.MainContainer>
        <Main />
      </S.MainContainer>
    </S.AppContainer>
  );
};

export default App;
