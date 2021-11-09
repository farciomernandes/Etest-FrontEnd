import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { QueryClientProvider } from "react-query";

import Footer from "../components/Footer";
import { queryClient } from "../services/queryCliente";

import { store, persistor } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
