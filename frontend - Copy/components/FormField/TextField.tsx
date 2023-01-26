import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useField, Field, FieldHookConfig } from 'formik';

interface OtherProps {
  label: string;
}

const TextField = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <FormControl
      //@ts-ignore
      isInvalid={meta.error && meta.touched}
    >
      <FormLabel>{props.label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
