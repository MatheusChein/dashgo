import { 
  Box,
  Heading,
  Button,
  Flex,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import { CustomInput } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const createUserFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória').min(6, 'Mínimo de 6 carácteres'),
  confirmPassword: Yup.string().oneOf([
    null, Yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values);
  }

  return (
    <Box  px='6'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto'>
        <SideBar />

        <Box
          flex='1'
          borderRadius={8}
          background='gray.800'
          padding={['6', '8']}
          as='form' 
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
              <CustomInput
                name='name'
                label='Nome completo'
                error={errors.name}
                {...register('name')}
              />
              <CustomInput
                name='email'
                type='email'
                label='E-mail'
                error={errors.email}
                {...register('email')}

              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
              <CustomInput
                name='password'
                type='password'
                label='Senha'
                error={errors.password}
                {...register('password')}
              />
              <CustomInput
                name='confirmPassword'
                type='password'
                label='Confirme sua senha'
                error={errors.confirmPassword}
                {...register('confirmPassword')}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop='8' justifyContent='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref><Button as='a' colorScheme='gray'>Cancelar</Button></Link>
              <Button 
                colorScheme='pink' 
                bg='pink.500' 
                type='submit' 
                color='white'
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}