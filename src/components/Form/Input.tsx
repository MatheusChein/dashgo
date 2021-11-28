import { Input as ChakraInput, FormLabel, FormControl, InputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface CustomInputProps extends InputProps {
  name: string;
  label?: string;
}

const CustomInputBase: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> 
  = ({ name, label, type, ...rest }, ref) => {
    return (
      <FormControl>
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
      </FormControl>
    )
}

export const CustomInput = forwardRef(CustomInputBase)