import { Input, FormLabel, FormControl, InputProps } from '@chakra-ui/react'

interface CustomInputProps extends InputProps {
  name: string;
  label?: string;
}

export function CustomInput({ name, label, type, ...rest }: CustomInputProps) {
  return (
    <FormControl>
      {label && (
        <FormLabel htmlFor={name}>
          {label}
        </FormLabel>
      )}

      <Input 
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
        {...rest}
      />
    </FormControl>
  )
}