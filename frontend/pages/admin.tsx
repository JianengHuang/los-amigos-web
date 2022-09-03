import { Heading, VStack, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useRef } from 'react';

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');
  const btnRef = useRef(null);

  return (
    <>
      <Heading as='h1' size='xl' textAlign='center' my={4}>
        Admin
      </Heading>
      <VStack spacing={4} w='100%' maxW='500px' mx='auto'>
        <Button mt={3} ref={btnRef} onClick={onOpen} color={'teal.100'} >
          Add Recipe
        </Button>
      </VStack>
    </>
  );
};

export default Admin;
