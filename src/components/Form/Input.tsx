import { Input as ChakraInput, FormLabel, FormControl, InputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface CustomInputProps extends InputProps {
  name: string;
  label?: string;
  error?: FieldError
}

const CustomInputBase: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> 
  = ({ name, label, error = null, type, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {label && (
          <FormLabel htmlFor={name}>
            {label}
          </FormLabel>
        )}

        <ChakraInput 
          name={name}
          id={name}
          type={type}
          focusBorderColor='pink.500'
          bgColor='gray.900'
          variant='filled'
          _hover={{
            bgColor: 'gray.900'
          }}
          size='lg'
          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
}

export const CustomInput = forwardRef(CustomInputBase)