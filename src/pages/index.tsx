import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { CustomInput } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <CustomInput
            label='Email'
            name='email'
            type='email'
            error={errors.email}
            {...register('email')}
          />

          <CustomInput
            label='Senha'
            name='password'
            type='password'
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button 
          type='submit' 
          mt='6'
          colorScheme='pink'
          color='white'
          bgColor='pink.500'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
