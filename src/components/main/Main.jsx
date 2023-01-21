import * as S from "./styles";

const Main = () => {
  return (
    <div>
      <S.Container>
        <S.Form>
          <S.Input type="text" placeholder="Email address or phone number" />
        </S.Form>
        <S.Form>
          <S.Input type="text" placeholder="Password" />
        </S.Form>
        <div>
          <S.Button login blue>
            Log in
          </S.Button>
        </div>
        <S.ForgottenSection>
          <S.ForgottenLink
            href="https://en-gb.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
            target="_blank"
            rel="noreferrer"
          >
            Forgotten password?
          </S.ForgottenLink>
        </S.ForgottenSection>
        <S.Line></S.Line>
        <S.CreateNewAccount>
          <S.Button register green>
            Create new Account
          </S.Button>
        </S.CreateNewAccount>
      </S.Container>
      <S.CreatePage>
        <S.CreatePageLink
          href="https://en-gb.facebook.com/pages/create/?ref_type=registration_form"
          target="_blank"
          rel="noreferrer"
        >
          Create a Page
        </S.CreatePageLink>{" "}
        for a celebrity, brand or business.
      </S.CreatePage>
    </div>
  );
};

export default Main;
