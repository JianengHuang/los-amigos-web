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
import { Dish } from '../../../typings';
import createDish from '../utils/createDish';
import editDish from '../utils/editDish';
import { useRouter } from 'next/router';
import DishContainer from './DishContainer';

interface Props {
  initialValues?: Dish;
  isEditing: boolean;
  dish: Dish;
}

const defaultInitialValues = {
  id: '',
  name: '',
  ingredients: '',
  price: '',
  image: '',
  category: '',
  allergens: '',
};

const EditDishForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>('info');
  const [message, setMessage] = useState('');
  const router = useRouter();

  return (
    <Formik
      initialValues={
        props.initialValues ? props.initialValues : defaultInitialValues
      }
      validationSchema={Yup.object({
        id: Yup.number().required('Id es necesario'),
        name: Yup.string().required('Nombre es necesario'),
        ingredients: Yup.string().required('Ingredientes son necesarios'),
        price: Yup.number().required('Precio es necesario'),
        category: Yup.string().required('Categoria es necesario'),
        allergens: Yup.string().required('Alergenos son necesarios'),
      })}
      onSubmit={(values: any, actions: any) => {
        const newValues: Dish = values;
        newValues.image = `/images/${values.id}.jpg`;
        newValues.ingredients = values.ingredients
          .split(',')
          .map((item: any) => item.trim());
        console.log(newValues.ingredients);
        setLoading(true);
        newValues.allergens = values.allergens
          .split(',')
          .map((item: any) => item.trim());
        console.log(newValues.allergens);
        setLoading(true);
        if (props.initialValues) {
          editDish(newValues, { setStatus, setMessage, setLoading });
          router.reload();
        } else {
          createDish(newValues, { setStatus, setMessage, setLoading });
          router.reload();
        }
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
          <Heading>{props ? 'Editar Plato' : 'Añadir Plato'}</Heading>
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
          {props.initialValues ? (
            <></>
          ) : (
            <Button
              isLoading={loading ? true : false}
              type='submit'
              variant='outline'
              colorScheme='teal'
            >
              Aceptar
            </Button>
          )}
          {!props.isEditing && <DishContainer dish={props.dish} />}
        </VStack>
      )}
    </Formik>
  );
};

export default EditDishForm;
