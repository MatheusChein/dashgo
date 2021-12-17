import { Stack, Button, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1
  }).filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : []

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : []

  return (
    <Stack
      direction={['column', 'row']}
      marginTop='8'
      justifyContent='space-between'
      alignItems='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack
        direction='row'
        spacing='2'
      >
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1}/>
            {currentPage > (2 + siblingsCount) && (
              <Text color='gray.200' width='2rem' textAlign='center' fontSize='1rem'>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(previousPage => (
          <PaginationItem onPageChange={onPageChange} key={previousPage} pageNumber={previousPage}/>
        ))}

        <PaginationItem onPageChange={onPageChange} isCurrent pageNumber={currentPage}/>

        {nextPages.length > 0 && nextPages.map(nextPage => (
          <PaginationItem onPageChange={onPageChange} key={nextPage} pageNumber={nextPage}/>
        ))}

        {(currentPage + siblingsCount + 1) < lastPage && (
          <>
            {(currentPage + siblingsCount) < lastPage - 2 && (
              <Text color='gray.200' width='2rem' textAlign='center' fontSize='1rem'>
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage}/>
          </>
        )}
      </Stack>
    </Stack>
  )
}