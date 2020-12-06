import React, { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hoooks/auth';

import {Page, Content, Main, LoginContainer} from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    try {
      await signIn({email, password});

      history.push('/ceps');
    } catch (error) {      
      if (email.length === 0 || password.length === 0) {
        alert('Preencha todos os campos.');
        return;
      }

      alert('Erro na autenticação, confirme seus dados.');
    }
  }, [email, password, history, signIn]);

  return (
    <Page>        
      <Content>
        <Main>
          <h1>Códigos de endereçamento postal</h1>
          <p>Consulte, valide e cadastre novos CEPs. Feito para os cidadãos de Gotham City!</p>

            <LoginContainer>
              <form onSubmit={handleLogin}>
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="E-mail ou username"
                />

                <input 
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Senha"
                />

                <button type="submit">
                  Entrar
                </button>
                
                <div>
                  <Link to="/register">
                    <strong>Não tem uma conta?</strong>             
                  </Link>
                </div>  
              </form>              
            </LoginContainer>
        </Main>
      </Content>
    </Page>
  );
}

export default SignIn;