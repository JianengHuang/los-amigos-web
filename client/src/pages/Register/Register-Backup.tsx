import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as React from 'react';
import { Logo } from './Logo';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { PasswordField } from './PasswordField';

// function FormikExample() {
//   function validateName(value) {
//     let error
//     if (!value) {
//       error = 'Name is required'
//     } else if (value.toLowerCase() !== 'naruto') {
//       error = "Jeez! You're not a fan 😱"
//     }
//     return error
// }

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
      as='form'
      onSubmit={(e) => formik.handleSubmit}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Logo />
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  type='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <PasswordField
                handleChange={formik.handleChange}
                value={formik.values.password}
              />
            </Stack>
            <Stack spacing='6'>
              <Button
                colorScheme='teal'
                variant='outline'
                type='submit'
                onSubmit={(e) => formik.handleSubmit}
              >
                Register
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
  );
};

export default Login;
