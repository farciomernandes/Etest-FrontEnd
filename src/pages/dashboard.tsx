import { Box, Spinner, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { connect } from "react-redux";

import dashboardImg from "../assets/images/dashboardIMG.svg";
import { Header } from "../components/Header";
import TurmasModal from "../components/Modal/turmas";
import EditarModal from "../components/Modal/editar";
import { NavLink } from "../components/NavLink";
import { useQuery } from "react-query";
import { api } from "../services/api";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

function Dashboard({ user }) {
  const router = useRouter();

  const { data, isLoading, error } = useQuery("turmas", async () => {
    const response = await api.get("/turmas");
    const data = response.data;

    return data;
  });

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Head>
        <title>Dashboard | E-test</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" justify="space-around" align="center">
        <Flex mr="auto" mt="20" flexDir="column" maxWidth={720}>
          <Text fontSize="7xl">
            Bem vindo ao E-test,
            <Text fontWeight="bold">{user.usuario.nome}</Text>
          </Text>

          <Text mt="5" fontWeight="regular">
            Entre nas suas turmas e veja todos os comentários feitos pelos
            professores, confira já suas notas através do boletim, veja suas
            avaliações respondidas
          </Text>

          <Text mt="5" fontWeight="bold">
            E-test é primeiro aplicativo desenvolvido no IFPB - Cajazeiras com
            objetivo de axíliar os professores totalmente por alunos.
          </Text>

          <Flex align="center" justify="space-between" mt="12">
            <VStack spacing="8">
              <TurmasModal
                turmas={user.usuario.turmas}
                role={user.usuario.roles ? user.usuario.roles : null}
              />

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

            <VStack spacing="8">
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

              <EditarModal user={user} />
            </VStack>
          </Flex>
        </Flex>
        <Flex>
          <Box position="absolute" right="0" top="20">
            {/**<Image src={dashboardImg} width={900} height={900} /> */}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Dashboard);
