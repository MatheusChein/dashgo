import { Flex, Button, Stack } from '@chakra-ui/react'
import { CustomInput } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      align='center' 
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>
          <CustomInput
            label='Email'
            name='email'
            type='email'
          />

          <CustomInput
            label='Senha'
            name='password'
            type='password'
          />
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' color='white' bgColor='pink.500' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
