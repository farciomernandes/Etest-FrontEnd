import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';


import { QueryClientProvider, QueryClient } from 'react-query';

import Footer from '../components/Footer';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryCliente';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

import store from '../redux/store';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
    </QueryClientProvider>
    </Provider>
  
  )
}

export default MyApp;