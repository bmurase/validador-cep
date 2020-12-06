import React, { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import {Page, PageTitle, Title, FormContainer} from './styles';

const Register: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.post('user', {email, password});
      alert('Cadastro realizado, faça seu login!');
      
      history.goBack();
    } catch (error) {
      if (email.length === 0 || password.length === 0) {
        alert('Preencha todos os campos.');
        return;
      }

      alert('Erro no cadastro, confirme seus dados.');
    }
  }, [email, password, history]);

  return(
    <Page>
      <PageTitle>Criar conta</PageTitle>
      <Title>Faça seu cadastro na plataforma.</Title>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="E-mail ou username"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">
            Salvar
          </button>
          
          <div>
            <Link to="/">
              <strong>Voltar para a home</strong>             
            </Link>
          </div>  
        </form>
      </FormContainer>
    </Page>
  );
}

export default Register;