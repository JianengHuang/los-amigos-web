import {
  Alert,
  AlertIcon,
  AlertStatus,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { Formik } from 'formik';
import { useState } from 'react';
import TextField from '../../components/FormField/TextField';
import { emailRegEx } from '../../utils/regex';
import { Logo } from './Logo';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import * as Yup from 'yup';
import { useUserUpdate } from '../../utils/Context';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>('info');
  const [message, setMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const updateUser = useUserUpdate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .matches(emailRegEx, 'Email es invalido')
          .required('Email es necesario'),
        password: Yup.string().required('Contraseña es necesaria'),
      })}
      onSubmit={(values, actions) => {
        setLoading(true);
        let input = { ...values, rememberMe };
        axios
          .post('http://localhost:4000/user/login', input, {
            withCredentials: true,
          })
          .then((res: AxiosResponse) => {
            setStatus('success');
            setMessage('Inicio de sesion exitoso');
            setLoading(false);
            updateUser();
            // window.location.href = '/';
          })
          .catch((err: AxiosError) => {
            setStatus('error');
            setMessage(err.message);
            setLoading(false);
          });
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Container
          as='form'
          maxW='lg'
          py={{ base: '12', md: '24' }}
          px={{ base: '0', sm: '8' }}
          //@ts-ignore
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing='8'>
            <Stack spacing='6'>
              <Logo />
              <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
                Inicia Sesión
                {status !== 'info' ? (
                  <Alert status={status}>
                    <AlertIcon />
                    <AlertTitle>{message}</AlertTitle>
                  </Alert>
                ) : null}
                <HStack spacing='1' justify='center'>
                  <Text color='muted'>No tienes una cuenta?</Text>
                  <Button
                    as='a'
                    variant='link'
                    colorScheme='blue'
                    href='/register'
                  >
                    Crear Cuenta
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              boxShadow={{
                base: 'none',
              }}
              borderRadius={{ base: 'none', sm: 'xl' }}
            >
              <Stack spacing='6'>
                <Stack spacing='5'>
                  <TextField
                    name='email'
                    label='Email'
                    placeholder='Escribe su email...'
                  ></TextField>
                  <TextField
                    name='password'
                    label='Contraseña'
                    type={'password'}
                    placeholder='Escribe su contraseña...'
                  ></TextField>
                </Stack>
                <HStack justify='space-between'>
                  {/* <Checkbox
                    defaultChecked
                    onChange={() => setRememberMe(!rememberMe)}
                  >
                    Remember me
                  </Checkbox> */}
                  <Button variant='link' colorScheme='blue' size='sm'>
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing='6'>
                  <Button
                    isLoading={loading ? true : false}
                    type='submit'
                    variant='outline'
                    colorScheme='teal'
                  >
                    Iniciar Sesion
                  </Button>
                  <HStack>
                    <Divider />
                    <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                      or continue with
                    </Text>
                    <Divider />
                  </HStack>
                  <OAuthButtonGroup />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      )}
    </Formik>
  );
};

export default Login;
