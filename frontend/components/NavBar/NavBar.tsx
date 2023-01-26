/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import logout from '../../utils/logout';
import { useEffect } from 'react';
import { useUser } from '../../utils/Context';

// import restaurantLogo from './restaurant-logo.png';

export default function WithSubnavigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const user = useUser();
  useEffect(() => {
    console.log(user);
  });

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            Restaurante Los Amigos
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack direction={'row'} spacing={3}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {user ? (
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={500}
              onClick={logout}
              bg={useColorModeValue('gray.300', 'gray.700')}
              _hover={{ bg: 'gray.600' }}
            >
              Cerrar sesión
            </Button>
          ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={3}
            >
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={500}
                href={'/login'}
                bg={'gray.700'}
                _hover={{ bg: 'gray.600' }}
              >
                Iniciar sesión
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'/register'}
                _hover={{
                  bg: 'pink.300',
                }}
              >
                Crear Cuenta
              </Button>
            </Stack>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
