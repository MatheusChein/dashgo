import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  //ReactElement é diferente de ReactNode, o ReactNode pode ser um texto ou qualquer coisa, o ReactElement PRECISA ser um elmento React
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ shouldMatchExactHref = false, children, ...rest }: ActiveLinkProps) {
  let isActive = false;
  const { asPath } = useRouter()

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
    isActive = true
  }
  
  return (
    <Link
      {...rest}
    >
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}