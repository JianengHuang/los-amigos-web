import {
  Heading,
  VStack,
  Button,
  Box,
  SimpleGrid,
  Editable,
  EditablePreview,
  EditableTextarea,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import Axios from 'axios';
import useGetAll from '../hooks/useGetAll';

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');
  const btnRef = useRef(null);
  const [dishes, setDishes] = useState<any>([]);
  useGetAll('dish', setDishes);
  console.log(dishes);

  return (
    <>
      <Heading as='h1' size='xl' textAlign='center' my={4}>
        Admin
      </Heading>
      <VStack spacing={4} w='100%' maxW='500px' mx='auto'>
        <Button mt={3} ref={btnRef} onClick={onOpen} color={'teal.100'}>
          Add Recipe
        </Button>
      </VStack>
      <SimpleGrid minChildWidth='120px' spacing='20px' margin={10}>
        {dishes.map((dish: any) => (
          <Box key={dish.id} bg='tomato'>
            {Object.keys(dish)
              .filter((key) => key !== '_id')
              .map((key: any, index: number) => (
                <Editable key={index} defaultValue={dish[key]}>
                  <EditablePreview />
                  <EditableTextarea />
                </Editable>
              ))}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Admin;
