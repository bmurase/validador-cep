import styled from 'styled-components';
import { shade } from 'polished';

export const Page = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 280px;
`;

export const Main = styled.div`
  flex: 1;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #3a3a3a;
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
    font-weight: 400;
    color: #737380;
  }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    input {
      border-radius: 10px;
      padding: 16px;
      width: 300px;
      border: 2px solid #3a3a3a;
      color: #666360;
      margin-bottom: 16px;
    }

    button {
      margin-right: 16px;
      margin-bottom: 16px;
      height: 50px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      background: #04d361;
      color: #ffffff;
      width: 300px;

      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }

    div {
      display: flex;
      justify-content: center;
      
      width: 300px;
      
      a {
        text-decoration: none;
        color: #3a3a3a;
      }
    }
`;