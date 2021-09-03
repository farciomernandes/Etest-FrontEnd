import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement; //ReactElement => Componente react 
                            //RectNode => Texto, img ou outra coisa
    sholdMatchExatcHref?: boolean;
}

export function ActiveLink({children, sholdMatchExatcHref = false, ...rest }: ActiveLinkProps){
    const { asPath } = useRouter();
    
    let isPurple = false;

    if(sholdMatchExatcHref && (asPath === rest.href || asPath === rest.as)){
        isPurple = true;
    }

    if(!sholdMatchExatcHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))){   
        isPurple = true;
    }

    return(
        <Link
        {...rest}
        >
            {cloneElement(children, { 
                color: isPurple ? 'purple.800' : 'white'
            })}
        </Link>
    );
}