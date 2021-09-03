import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps, Button } from "@chakra-ui/react";
import { ElementType } from 'react';
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType | null;
    children: string;
    href: string;
}

export function NavLink({ icon=null, children, href, color, bg, h, size, w, colorScheme=null, ...rest }: NavLinkProps){

    return(
        <ActiveLink href={href} passHref>
            <Button color={color} bg={bg}
            h={h}
            size={size}
            w={w}
            colorScheme={colorScheme}
            >
            <ChakraLink 
             display="flex" 
             align="center"
             {...rest}
             >
                 {icon && <Icon mr="2"  as={icon} color={color} fontSize="20"/> }
                
                <Text fontWeight="bold" color={color}>{children}</Text>
            </ChakraLink>
            </Button>
        </ActiveLink>

    );
}