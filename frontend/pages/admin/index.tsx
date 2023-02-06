import {
  Heading,
  VStack,
  Button,
  Box,
  SimpleGrid,
  Editable,
  EditablePreview,
  EditableTextarea,
  useColorModeValue,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import useGetAll from '../../hooks/useGetAll';
import AddDishForm from './AddDishForm';
import withAuth from '../../utils/withAuth';
import deleteDish from './deleteDish';

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');
  const btnRef = useRef(null);
  const [dishes, setDishes] = useState<any>([]);
  useGetAll('dish', setDishes);

  return (
    <>
      <Heading as='h1' size='xl' textAlign='center' my={4}>
        Admin
      </Heading>
      <VStack spacing={4} w='100%' maxW='500px' mx='auto'>
        <Button
          mt={3}
          ref={btnRef}
          onClick={onOpen}
          color={useColorModeValue('teal.800', 'teal.100')}
          bgColor={useColorModeValue('teal.100', 'teal.800')}
        >
          Añadir Plato
        </Button>
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={'inside'}
          size={'xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Añadir Plato</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddDishForm />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
      <SimpleGrid minChildWidth='120px' spacing='20px' margin={10}>
        {dishes.map((dish: any) => (
          <Box key={dish.id} bg='tomato'>
            {Object.keys(dish)
              .filter((key) => key !== '_id' && key !== '__v')
              .map((key: any, index: number) => (
                <Editable key={index} defaultValue={dish[key]} border='1px'>
                  <p>
                    <em>{key}</em>
                  </p>
                  <EditablePreview />
                  <EditableTextarea />
                </Editable>
              ))}
            <Button color='red' onClick={() => deleteDish(dish._id)}>Eliminar</Button>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Admin;
