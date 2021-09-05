import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { QueryClientProvider, QueryClient } from 'react-query';

import Footer from '../components/Footer';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryCliente';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
    </QueryClientProvider>
  
  )
}

export default MyApp;