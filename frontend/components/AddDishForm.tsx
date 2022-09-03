import {
  VStack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
} from '@chakra-ui/react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Formik } from 'formik';
import TextField from './FormField/TextField';
import * as Yup from 'yup';
import { useState } from 'react';
import { AlertStatus } from '@chakra-ui/react';

const AddDishForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>('info');
  const [message, setMessage] = useState('');

  return (
    <Formik
      initialValues={{
        name: '',
        ingredients: [''],
        price: '',
        image: '',
        category: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Nombre es necesario'),
        ingredients: Yup.array().of(
          Yup.string().required('Ingrediente es necesario')
        ),
        price: Yup.number().required('Precio es necesario'),
        image: Yup.string().required('Imagen es necesario'),
        category: Yup.string().required('Categoria es necesario'),
      })}
      onSubmit={(values: any, actions: any) => {
        setLoading(true);
        axios
          .post('http://localhost:4000/dish/', values, {
            withCredentials: true,
          })
          .then((res: AxiosResponse) => {
            console.log(res);
            if (res.status === 200) {
              setStatus('success');
              setMessage('Plato creado correctamente');
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
          <Heading>Añadir Plato</Heading>
          {status !== 'info' ? (
            <Alert status={status}>
              <AlertIcon />
              <AlertTitle>{message}</AlertTitle>
            </Alert>
          ) : null}

          <TextField
            name='name'
            label='Nombre'
            placeholder='Escribe el nombre del plato...'
          ></TextField>

          <TextField
            name='ingredients'
            label='Ingredientes'
            type='array'
            placeholder='Escribe los ingredientes...'
          ></TextField>

          <TextField
            name='price'
            label='Precio'
            type='number'
            placeholder='Escribe el precio...'
          ></TextField>

          <TextField
            name='image'
            label='Imagen'
            type='string'
            placeholder='Escribe el link de la photo...'
          ></TextField>

          <TextField
            name='category'
            label='Categoria'
            type='string'
            placeholder='Escribe la categoria...'
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

export default AddDishForm;
