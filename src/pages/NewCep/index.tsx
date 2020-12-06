import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hoooks/auth';
import api from '../../services/api';

import {Page, Header, SignOutButton, PageTitle, Title, FormContainer} from './styles';

const NewCep: React.FC = () => {
  const { signOut, user } = useAuth();
  const history = useHistory();

  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  
  useEffect(() => {    
    if (!user.id) {
      history.push('/');
    }
  }, [user, history]);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.post('cep', {city, cep});
            
      history.goBack();
    } catch (error) {
      if (city.length === 0 || cep.length === 0) {
        alert('Preencha todos os campos.');
        return;
      }

      alert('O CEP inserido não pode conter dígito repetitivo alternado em pares.');
    }
  }, [city, cep, history]);

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/');
  }, [signOut, history]);

  return(
    <Page>
      <Header>
        <PageTitle>Novo CEP</PageTitle>
        <SignOutButton onClick={handleSignOut}>
          Sair
        </SignOutButton>
      </Header>
      {/* <PageTitle>Novo CEP</PageTitle> */}
      <Title>Cadastre aqui um novo CEP.</Title>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Cidade"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <input 
            placeholder="CEP"
            type="number"
            min="100000" max="999999"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />

          <button type="submit">
            Salvar
          </button>
          
          <div>
            <Link to="/ceps">
              <strong>Voltar para a lista de CEPs</strong>             
            </Link>
          </div>  
        </form>
      </FormContainer>
    </Page>
  );
}

export default NewCep;