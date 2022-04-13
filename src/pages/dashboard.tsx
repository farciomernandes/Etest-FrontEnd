import { Box, Spinner, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import dashboardImg from "../assets/images/dashboard2.png";
import { Header } from "../components/Header";
import TurmasModal from "../components/Modal/turmas";
import EditarModal from "../components/Modal/editar";
import { NavLink } from "../components/NavLink";
import { useQuery } from "react-query";
import { api } from "../services/api";
import Head from "next/head";

import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const { data, isLoading, error } = useQuery("turmas", async () => {
    const response = await api.get("/turmas");
    const data = response.data;

    return data;
  });

  return (
    <Flex
      direction="column"
      h="100vh"
      maxWidth={1480}
      w={["250%", "100%"]}
      mx="auto"
      px={["1", "6"]}
    >
      <Head>
        <title>Dashboard | E-test</title>
      </Head>
      <Header />

      <Flex
        w="100%"
        my={["0", "6"]}
        justify={["center", "space-around"]}
        align="center"
        direction={["column", "row"]}
      >
        <Flex
          mr={["0", "auto"]}
          mt={["250", "20"]}
          flexDir="column"
          maxWidth={720}
          w={["100%", "100%"]}
          justify="flex-start"
          align="start"
        >
          <Text fontSize={["5.5em", "7xl"]} whiteSpace="nowrap">
            Bem vindo ao E-test,
            <Text fontWeight="bold" whiteSpace="nowrap">
              {user ? user.nome : ""}
            </Text>
          </Text>

          <Text  mt={["0", "5"]} fontWeight="regular" fontSize={["32px", "lg"]} maxWidth={720}>
            Entre nas suas turmas e veja todos os comentários feitos pelos
            professores, confira já suas notas através do boletim, veja suas
            avaliações respondidas
          </Text>

          <Text mt="5" fontWeight="bold" fontSize={["32px", "lg"]}>
            E-test é primeiro aplicativo desenvolvido no IFPB - Cajazeiras com
            objetivo de auxíliar os professores, desenvolvido totalmente por um aluno.
          </Text>

          <Flex align="center" justify="space-between" mt="12">
            <VStack spacing="8">
              {user ? <TurmasModal turmas={user.turmas} /> : <Spinner />}

              <NavLink
                icon={null}
                href="/professor/avaliacoes/lista"
                bg="#38A169"
                color="white"
                type="submit"
                h="57"
                size="lg"
                w={350}
                colorScheme="green"
              >
                Minhas avaliações
              </NavLink>
            </VStack>

            <VStack spacing="8" ml="4">
              <NavLink
                icon={null}
                href="/aluno/boletim"
                bg="#38A169"
                color="white"
                type="submit"
                h="57"
                size="lg"
                w={350}
                colorScheme="green"
              >
                Meu Boletim
              </NavLink>
              {user ? <EditarModal /> : <Spinner />}
            </VStack>
          </Flex>
        </Flex>
        <Flex
          w={["110%", "100%"]}
          justify={["flex-end", "center"]}
          align="center"
        >
          <Box
            position={["relative", "absolute"]}
            right={[, "0"]}
            top={["0", "220"]}
          >
            {<Image src={dashboardImg} width={700} height={700} />}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["authToken.etest"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
