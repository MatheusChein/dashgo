import { Text, Link as ChakraLink, Icon, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  title: string;
  icon: IconType;
  href: string;
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20'/>
        <Text ml='4' fontWeight='medium'>{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}