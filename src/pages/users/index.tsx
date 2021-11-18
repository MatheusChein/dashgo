import { 
  Box,
  Heading,
  Button,
  Flex,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box
          flex='1'
          borderRadius={8}
          background='gray.800'
          padding='8'
        >
          <Flex
            marginBottom='8'
            justifyContent='space-between'
            alignItems='center'
          >
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            
            <Button
              as='a' 
              size='sm' 
              fontSize='sm'
              colorScheme='pink'
              bgColor='pink.500'
              color='white'
              leftIcon={<Icon as={RiAddLine}/>}
            >
              Criar novo
            </Button>
          </Flex>

          <Table
            colorScheme='whiteAlpha'
          >
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Matheus Chein</Text>
                    <Text fontSize='sm' color='gray.300 '>matheuschein@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a' 
                    size='sm' 
                    fontSize='sm'
                    colorScheme='purple'
                    bg='purple.500'
                    color='white'
                    leftIcon={<Icon as={RiPencilLine}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Matheus Chein</Text>
                    <Text fontSize='sm' color='gray.300 '>matheuschein@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a' 
                    size='sm' 
                    fontSize='sm'
                    colorScheme='purple'
                    bg='purple.500'
                    color='white'
                    leftIcon={<Icon as={RiPencilLine}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Matheus Chein</Text>
                    <Text fontSize='sm' color='gray.300 '>matheuschein@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a' 
                    size='sm' 
                    fontSize='sm'
                    colorScheme='purple'
                    bg='purple.500'
                    color='white'
                    leftIcon={<Icon as={RiPencilLine}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}