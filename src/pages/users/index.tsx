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
  Link as ChakraLink
} from "@chakra-ui/react";
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, isFetching, isError, error, refetch } = useUsers(currentPage)

  useEffect(() => {
    
  }, [])

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['@chakraDashboard: user', userId], async () => {
      const response = await api.get(`/users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    })
  }

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
                {data.users.map(user => (
                  <Tr key={user.id}>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='pink'/>
                    </Td>
                    <Td>
                      <Box>
                        <ChakraLink color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                          <Text fontWeight='bold'>{user.name}</Text>
                        </ChakraLink>
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

            <Pagination
              totalCountOfRegisters={data.totalCount}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}