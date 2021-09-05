import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { QueryClientProvider, QueryClient } from 'react-query';

import Footer from '../components/Footer';
import { makeServer } from '../services/mirage';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient(); 

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