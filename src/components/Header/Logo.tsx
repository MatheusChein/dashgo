import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text 
      fontSize={['2xl', '3xl']} //Esse array é para dizer o fontsize para cada breakpoint. Nesse caso, 2xl para o mobile e 3xl a partir dos demais
      fontWeight='bold' 
      letterSpacing='tight' 
      w='64'
    >
      dashgo
      <Text as='span' ml='1' color='pink.500'>.</Text>
    </Text>
  )
}