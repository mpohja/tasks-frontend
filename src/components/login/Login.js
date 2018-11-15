import React, { useState } from 'react';
import { Heading, Pane, TextInputField, Button } from 'evergreen-ui';
import { useMutation } from 'react-apollo-hooks';
import { loader } from 'graphql.macro';
import { withRouter } from 'react-router-dom';

const LOGIN = loader('../../graphql/mutations/login.graphql');

const Login = ({ history: { push } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logging, setLogging] = useState(false);

  const useLogin = useMutation(LOGIN, {
    update: (proxy, { data }) => {
      proxy.writeData({ data: data.login });
      window.localStorage.setItem('token', data.login.token);
      push('/');
    },
    variables: { input: { email, password } },
  });

  const login = async () => {
    setLogging(true);
    await useLogin();
    setLogging(false);
  };

  return (
    <Pane height={220} padding={16} display="flex" flexDirection={'column'} alignItems="center" justifyContent="center">
      <Heading>Login</Heading>
      <Pane>
        <TextInputField label={'Email'} display={'block'} value={email} onChange={e => setEmail(e.target.value)} />
        <TextInputField
          label={'Password'}
          type={'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button height={32} marginRight={16} intent="success" onClick={login} disabled={logging}>
          Login
        </Button>
      </Pane>
    </Pane>
  );
};

export default withRouter(Login);
