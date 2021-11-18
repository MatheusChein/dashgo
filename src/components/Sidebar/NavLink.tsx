import { Text, Link, Icon, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends LinkProps {
  title: string;
  icon: IconType;
}

export function NavLink({ title, icon, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20'/>
      <Text ml='4' fontWeight='medium'>{title}</Text>
    </Link>
  )
}