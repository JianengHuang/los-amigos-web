import {
  VStack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
} from "@chakra-ui/react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Formik } from "formik";
import TextField from "../../components/FormField/TextField";
import * as Yup from "yup";
import { useState } from "react";
import { AlertStatus } from "@chakra-ui/react";
import formData from "./formData";

const AddDishForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertStatus>("info");
  const [message, setMessage] = useState("");

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        ingredients: "",
        price: "",
        image: "",
        category: "",
        allergens: "",
      }}
      validationSchema={Yup.object({
        id: Yup.number().required("Id es necesario"),
        name: Yup.string().required("Nombre es necesario"),
        ingredients: Yup.string().required("Ingredientes son necesarios"),
        price: Yup.number().required("Precio es necesario"),
        category: Yup.string().required("Categoria es necesario"),
        allergens: Yup.string().required("Alérgenos son necesarios"),
      })}
      onSubmit={(values: any, actions: any) => {
        const newValues = values;
        newValues.image = `/images/${values.id}.jpg`;
        newValues.ingredients = values.ingredients
          .split(",")
          .map((item: any) => item.trim());
        setLoading(true);
        axios
          .post("http://localhost:4000/dish/createdish", newValues)
          .then((res: AxiosResponse) => {
            console.log(res);
            if (res.status === 200) {
              setStatus("success");
              setMessage("Plato creado correctamente");
            } else {
              setStatus("error");
              setMessage(res.data);
            }
            setLoading(false);
          })
          .catch((err: AxiosError) => {
            setStatus("error");
            console.log("error", err);
            setMessage(err.message);
            setLoading(false);
          });
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "90%", md: 500 }}
          h="70vh"
          justifyContent="center"
          //@ts-ignore
          onSubmit={formik.handleSubmit}
        >
          <Heading>Añadir Plato</Heading>
          {status !== "info" ? (
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
            type="submit"
            variant="outline"
            colorScheme="teal"
          >
            Aceptar
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default AddDishForm;
