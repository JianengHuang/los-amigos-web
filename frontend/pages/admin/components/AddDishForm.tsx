import {
  VStack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import TextField from '../../../components/FormField/TextField';
import * as Yup from 'yup';
import { useState } from 'react';
import { AlertStatus } from '@chakra-ui/react';
import formData from '../data/formData';
import { FilteredDish } from '../../../typings';
import createDish from '../utils/createDish';
import { useRouter } from 'next/router';

const defaultInitialValues = {
  id: '',
  name: '',
  ingredients: '',
  price: '',
  image: '',
  category: '',
  allergens: '',
};

const AddDishForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>('info');
  const [message, setMessage] = useState('');
  const router = useRouter();

  return (
    <Formik
      initialValues={defaultInitialValues}
      validationSchema={Yup.object({
        id: Yup.number().required('Id es necesario'),
        name: Yup.string().required('Nombre es necesario'),
        ingredients: Yup.string().required('Ingredientes son necesarios'),
        price: Yup.number().required('Precio es necesario'),
        category: Yup.string().required('Categoria es necesario'),
        allergens: Yup.string().required('Alergenos son necesarios'),
      })}
      onSubmit={(values, actions) => {
        const newValues: FilteredDish = values;
        newValues.image = `/images/${values.id}.jpg`;
        newValues.ingredients = values.ingredients;
        newValues.allergens = values.allergens;
        setLoading(true);
        console.log(newValues);
        createDish(newValues, { setStatus, setMessage, setLoading });
      }}
    >
      {(formik) => (
        <VStack
          as='form'
          mx='auto'
          w={{ base: '90%', md: 500 }}
          h='70vh'
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
          {formData.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}
          <Button
            isLoading={loading ? true : false}
            type='submit'
            variant='outline'
            colorScheme='teal'
          >
            Aceptar
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default AddDishForm;
