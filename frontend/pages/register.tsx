import { useState } from 'react';

import { Button } from '@chakra-ui/button';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Heading,
  VStack,
} from '@chakra-ui/react';

import { Formik } from 'formik';

import * as Yup from 'yup';

import TextField from '../components/FormField/TextField';

import axios, { AxiosError, AxiosResponse } from 'axios';

import { AlertStatus } from '@chakra-ui/react';

import { emailRegEx, passwordRegEx } from '../utils/regex';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>('info');
  const [message, setMessage] = useState('');

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .matches(emailRegEx, 'Email es invalido')
          .required('Email es necesario'),
        password: Yup.string()
          .required('Contraseña es necesaria')
          .matches(
            passwordRegEx,
            'Tiene que contener 8 Characteres, Mayusculas, Minusculas y un Numero'
          ),
      })}
      onSubmit={(values, actions) => {
        setLoading(true);
        axios
          .post('http://localhost:4000/user/register', values, {
            withCredentials: true,
          })
          .then((res: AxiosResponse) => {
            console.log(res);
            if (res.data === 'Usuario creado con exito') {
              setStatus('success');
              setMessage('Usuario creado con exito');
            } else {
              setStatus('error');
              setMessage(res.data);
            }
            setLoading(false);
          })
          .catch((err: AxiosError) => {
            setStatus('error');
            console.log('error', err);
            setMessage(err.message);
            setLoading(false);
          });
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as='form'
          mx='auto'
          w={{ base: '90%', md: 500 }}
          h='100vh'
          justifyContent='center'
          //@ts-ignore
          onSubmit={formik.handleSubmit}
        >
          <Heading>Registrate</Heading>
          {status !== 'info' ? (
            <Alert status={status}>
              <AlertIcon />
              <AlertTitle>{message}</AlertTitle>
            </Alert>
          ) : null}

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

          <Button
            isLoading={loading ? true : false}
            type='submit'
            variant='outline'
            colorScheme='teal'
          >
            Crear Cuenta
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Register;
