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
import { useImperativeHandle, useState } from 'react';
import { AlertStatus } from '@chakra-ui/react';
import formData from '../data/formData';
import { Dish, FilteredDish } from '../../../typings';
import createDish from '../utils/createDish';
import editDish from '../utils/editDish';
import { useRouter } from 'next/router';
import DishContainer from './DishContainer';

interface Props {
  initialValues: Dish;
  isEditing: boolean;
  dish: Dish;
}

const EditDishForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>('info');
  const [message, setMessage] = useState('');

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={Yup.object({
        id: Yup.number().required('Id es necesario'),
        name: Yup.string().required('Nombre es necesario'),
        ingredients: Yup.string().required('Ingredientes son necesarios'),
        price: Yup.number().required('Precio es necesario'),
        category: Yup.string().required('Categoria es necesario'),
        allergens: Yup.string().required('Alergenos son necesarios'),
      })}
      onSubmit={(values, actions) => {
        setLoading(true);
        console.log('submitted');
        const newValues: Dish = {
          ...values,
          image: `/images/${values.id}.jpg`,
          ingredients: values.ingredients,
          allergens: values.allergens,
          _id: props.dish._id,
          __v: props.dish.__v,
        };
        editDish(newValues, { setStatus, setMessage, setLoading });
        setLoading(false);
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
          <Heading>Editar Plato</Heading>
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
          {!props.isEditing && <DishContainer dish={props.dish} />}
          {props.isEditing && (
            <Button
              type='submit'
              variant='outline'
              isLoading={loading ? true : false}
              bg='green.200'
            >
              Confirmar
            </Button>
          )}
        </VStack>
      )}
    </Formik>
  );
};

export default EditDishForm;
