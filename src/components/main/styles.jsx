import styled from "styled-components";

//Colors.
const colors = {
  blue: "#1877f2",
  green: "#42b72a",
  white: "#ffffff",
  grey: "#dadde1",
  black: "#1c1e21",
  hoverBlue: "#1876f2f8",
  hoverGreen: "#42b72af5",
};

//Main Container styles.
export const Container = styled.div`
  font-size: 12px;
  padding-top: 6px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 395px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 20%), 0 8px 16px rgb(0 0 0 / 20%);
`;

//Form styles.
export const Form = styled.div`
  margin-top: 12px;
`;

export const Input = styled.input`
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  border: 1px solid ${colors.grey};
  border-radius: 6px;
  outline: none;
  :focus {
    outline: 1px solid ${colors.blue};
  }
`;

//Login button and create new account button styles.
export const Button = styled.button`
  margin-top: 16px;
  padding: 13px;
  border-radius: 6px;
  border: none;
  color: ${colors.white};
  font-size: ${(props) => (props.login ? 20 : props.register ? 18 : 12)}px;
  font-weight: bold;
  background-color: ${(props) =>
    props.blue
      ? colors.blue
      : props.green
      ? colors.green
      : colors.blue}; //Background-color will be passed by props.
  width: ${(props) =>
    props.login
      ? 365
      : props.register
      ? 200
      : 100}px; //Width will be passed by props.
  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.login
        ? colors.hoverBlue
        : props.register
        ? colors.hoverGreen
        : colors.blue};
  }
`;

//Forgotten Section styles.
export const ForgottenSection = styled.div`
  text-align: center;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const ForgottenLink = styled.a`
  color: ${colors.blue};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

//Line styles.
export const Line = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.grey};
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

//Create new account div styles.
export const CreateNewAccount = styled.div`
  margin-bottom: 24px;
`;

//Create page div styles.
export const CreatePage = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
`;

export const CreatePageLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.black};
  :hover {
    text-decoration: underline;
  }
`;
