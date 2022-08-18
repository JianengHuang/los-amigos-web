import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface PasswordFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const PasswordField = ({ handleChange, value }: PasswordFieldProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  // const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor='password'>Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant='link'
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id='password'
          name='password'
          type={isOpen ? 'text' : 'password'}
          autoComplete='current-password'
          required
          onChange={handleChange}
          value={value}
        />
      </InputGroup>
    </FormControl>
  );
};

PasswordField.displayName = 'PasswordField';
