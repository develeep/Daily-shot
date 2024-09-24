import { css, styled } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => {
    return css`
      background-color: ${props.theme.colors.primary};
    `;
  }}
  border-radius: 30px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 12px;
`;
export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  text-align: center;
  font-weight: 550;
  font-size: 16px;
  color: ${(props) => props.theme.colors.blue};
  &[type='submit'] {
    background-color: ${(props) => props.theme.colors.primaryFixed};
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    &:disabled {
      opacity: 0.5;
      cursor: none;
    }
  }
`;
export const Tittle = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkBlack};
`;
export const Error = styled.span`
  font-weight: 600;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.colors.error};
`;
export const Switcher = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: centee;
  gap: 10px;
  margin-top: 20px;
  a {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

export const SocialBtn = styled.span`
  background-color: white;
  font-weight: 800;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 25px;
`;

export const Text = styled.span`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
