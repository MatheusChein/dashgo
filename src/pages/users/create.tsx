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
import { CustomInput } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

export default function CreateUser() {
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
        >
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
              <CustomInput
                name='name'
                label='Nome completo'
              />
              <CustomInput
                name='email'
                type='email'
                label='E-mail'
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
              <CustomInput
                name='password'
                type='password'
                label='Senha'
              />
              <CustomInput
                name='confirmPassword'
                type='password'
                label='Confirme sua senha'
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop='8' justifyContent='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref><Button as='a' colorScheme='gray'>Cancelar</Button></Link>
              <Button colorScheme='pink' bg='pink.500' color='white'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}