import styled from 'styled-components';
import { shade } from 'polished';

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

export const NewButtonContainer = styled.div`
  margin: 32px 0;
  
  a {
    text-decoration: none;
    background-color: #04d361;
    border-radius: 10px;
    border: 0;
    color: #ffffffff;
    padding: 16px;

    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const List = styled.div`
  margin-top: 100px;
  max-width: 700px;
`;

export const Item = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & + div {
    margin-top: 16px;
  }
`;

export const Line = styled.div`
  & + div {
    margin-right: 120px;
  }
`;