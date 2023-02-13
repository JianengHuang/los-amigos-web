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
  Flex,
  ButtonGroup,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import useGetAll from '../../hooks/useGetAll';
import AddDishForm from './components/AddDishForm';
import withAuth from '../../utils/withAuth';
import deleteDish from './utils/deleteDish';
import { Dish, FilteredDish } from '../../typings';
import DishContainer from './components/DishContainer';
import EditDishForm from './components/EditDishForm';

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [dishes, setDishes] = useState<Dish[]>([]);
  useGetAll('dish', setDishes);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditValue, setCurrentEditValue] = useState<Dish>({
    _id: '',
    id: '',
    name: '',
    ingredients: '',
    price: '',
    image: '',
    category: '',
    allergens: '',
    __v: '',
  });

  const handleConfirmation = () => {};

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
      <SimpleGrid minChildWidth='200px' spacing='20px' margin={10}>
        {dishes.map((dish) => (
          <Box key={dish.id} bg='purple.200' color='black'>
            {isEditing && (
              <EditDishForm
                initialValues={dish}
                isEditing={isEditing}
                dish={dish}
              />
            )}
            <Flex justifyContent={'center'} padding='2'>
              <ButtonGroup gap='2'>
                <Button bg='red.200' onClick={() => deleteDish(dish._id)}>
                  Eliminar
                </Button>
                {isEditing && (
                  <Button bg='green.200' onClick={handleConfirmation}>
                    Confirmar
                  </Button>
                )}
                <Button bg='blue.200' onClick={() => setIsEditing(!isEditing)}>
                  Editar
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Admin;
