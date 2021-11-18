import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex alignItems='center'>
      <Box mr='4' textAlign='right'>
        <Text>Matheus Chein</Text>
        <Text
          color='gray.300'
          fontSize='small'
        >
          matheuschein@gmail.com
        </Text>
      </Box>
      
      <Avatar size='md' name='Matheus Chein' src='https://github.com/MatheusChein.png'/>
    </Flex>
  )
}