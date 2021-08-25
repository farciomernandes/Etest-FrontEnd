import { extendTheme } from  '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        white: {
            "900": "#FFFFFF",
            "700": "#FEFEFE",
            "600": "#F7F9FF",
            "200": "#737380"
        },
        purple: {
            "800": "#5A17E9",
            "500": "#4813BA"
        },
        red: {
            "500": "#E53C17"
        },
        green: {
            "700": "#09C55E"
        }
    },
    styles: {
        global: {
            body:{
                bg: 'purple.800',
                color: 'white.900'
            }
        }
    }
})