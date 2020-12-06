import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hoooks/auth';
import api from '../../services/api';

import { Header, SignOutButton, PageTitle, Title, NewButtonContainer, List, Item, Line } from './styles';

interface CepData {
  id: string;
  city: string;
  cep: string;
}

const Ceps: React.FC = () => {
  const { signOut, user } = useAuth();
  const { push } = useHistory();
  const [ceps, setCeps] = useState<CepData[]>([]);

  useEffect(() => {
    api.get('cep').then(response => {
      setCeps(response.data);
    })
  }, [ceps]);

  useEffect(() => {    
    if (!user.id) {
      push('/');
    }
  }, [user, push]);
  
  const handleSignOut = useCallback(() => {
    signOut();
    push('/');
  }, [signOut, push]);

  return(
    <>
      <Header>
        <PageTitle>CEPs cadastrados</PageTitle>
        <SignOutButton onClick={handleSignOut}>
          Sair
        </SignOutButton>
      </Header>

      <Title>Encontre aqui os CEPs que você precisa.</Title>

      <NewButtonContainer>
        <Link to='/newcep'>
          Adicionar novo CEP
        </Link>
      </NewButtonContainer>

      <List>
        {ceps.map(item => (
          <Item key={item.id}>
            <Line>
              <strong>Cidade: </strong>
              {item.city}
            </Line>
            <Line>
              <strong>CEP: </strong>
              {item.cep}
            </Line>
          </Item>
        ))}
      </List>
    </>
  );
}

export default Ceps;