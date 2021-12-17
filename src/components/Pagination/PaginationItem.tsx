import { Stack, Button, Box } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  pageNumber: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
   isCurrent = false, 
   pageNumber,
   onPageChange
}: PaginationItemProps) {

  if (isCurrent) {
    return (
      <Button 
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
          color: 'white'
        }}
      >
        {pageNumber}
      </Button>
    )
  }
  
  return (
    <Button 
      size='sm'
      fontSize='xs'
      width='4'
      bgColor='gray.700'
      onClick={() => onPageChange(pageNumber)}
      _hover={{
        bgColor: 'gray.500'
      }}
    >
      {pageNumber}
    </Button>
  )
}