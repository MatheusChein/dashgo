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
  useBreakpointValue,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useEffect } from "react";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const { data, isLoading, isFetching, isError, error, refetch } = useUsers()

  useEffect(() => {
    
  }, [])

  return (
    <Box px='6'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto'>
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
            <Heading size='lg' fontWeight='normal'>
              Usuários
              {(isFetching && !isLoading) && <Spinner size='sm' color='gray.500' ml='1rem'/>}
            </Heading>
            <HStack justify='flex-end' >
              <Button
                size='sm' 
                fontSize='sm'
                colorScheme='pink'
                bgColor='pink.500'
                color='white'
                onClick={() => refetch()}
              >
                Atualizar Dados
              </Button>

              <Link href='/users/create' passHref>
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
              </Link>
            </HStack>
          </Flex>

          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : isError ? (
            <Flex justify='center'>
              <Text>{error}</Text>
            </Flex>
          ) : (
            <>
            <Table
              colorScheme='whiteAlpha'
            >
              <Thead>
                <Tr>
                  <Th px={['4', '4', '6']} color='gray.300' width='8'>
                    <Checkbox colorScheme='pink' />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  {isWideVersion && <Th width='8'></Th>}
                </Tr>
              </Thead>

              <Tbody>
                {data.map(user => (
                  <Tr key={user.id}>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='pink'/>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>{user.name}</Text>
                        <Text fontSize='sm' color='gray.300 '>{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                    {isWideVersion && (
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
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>

            <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}