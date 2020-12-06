import styled from 'styled-components';
import { shade } from 'polished';

export const Page = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 24px;
  color: #737380;
  font-weight: 400;
  transition: background-color 0.2s;

  &:hover {
    color: ${shade(0.7, '#737380')};
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  color: #737380;
  font-weight: 400;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 500px;
  line-height: 56px;

  margin-top: 120px;
`;

export const FormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

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