import { Flex, Stack, Text, Divider, Box, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

import Image from "next/image";
import { useEffect } from "react";

import logoImg from "../assets/images/logo2.svg";

import { VscSignOut } from "react-icons/vsc";
import { NavLink } from "../components/NavLink";

import { connect } from "react-redux";

import { useRouter } from "next/dist/client/router";

function Home({ user }) {
  const router = useRouter();

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Home | E-test</title>
      </Head>
      <Flex
        w="100%"
        align="center"
        justify="space-around"
        px={["0", "60"]}
        mb={["0", "12"]}
        direction={["column", "row"]}
      >
        <Flex flexDirection="column" justify="center">
          <Stack
            spacing={["2", "-10"]}
            maxWidth={720}
            border="1px"
            borderColor="red"
            display={["none", "flex"]}
          >
            <Text fontSize={"8xl"}>E-test</Text>
            <Text fontSize="2xl" fontWeight="bold" py="5">
              Aplicação Web para Auxílio na Realização de Atividades Avaliativas
              em Cursos EaD
            </Text>
          </Stack>
          <Text maxWidth={720} border="1px" display={["none", "flex"]}>
            O E-test é uma ferramenta desenvolvida com o intuito de melhorar o
            processo de ensino-aprendizagem. Usada principalmente por
            professores, seu objetivo é facilitar o desenvolvimento e aplicação
            de atividades avaliativas, contando com um banco de questões, mural,
            turmas personalizadas e suporte para exportação dos dados em csv.
            Tudo isso para facilitar a vida do professor e aluno.
          </Text>
        </Flex>

        <Flex flexDirection="column" justify="center">
          <Stack spacing="5" w={["100%", "20vw"]}>
            <Box w="100%" justify="center" align="center" mb={["20", "0"]}>
              <Image src={logoImg} width={120} height={120} />
            </Box>
            <VStack spacing="2" w="100%">
              <NavLink
                icon={VscSignOut}
                href="/aluno"
                bg="white.900"
                color="purple.800"
                h="57"
                size="lg"
                w="100%"
              >
                Entrar como aluno
              </NavLink>

              <NavLink
                icon={VscSignOut}
                href="/professor"
                color="white"
                h="57"
                size="lg"
                colorScheme="green"
                w="100%"
              >
                Entrar como professor
              </NavLink>

              <Flex w="100%" justify="center" align="center">
                <Divider />
                <Text px="5">ou</Text>
                <Divider />
              </Flex>

              <Stack w="100%">
                <NavLink
                  w="100%"
                  icon={VscSignOut}
                  href="/cadastro"
                  color="white"
                  h="57"
                  size="lg"
                  colorScheme="red"
                >
                  Cadastre-se
                </NavLink>

                <Flex justify="center" align="center" color="white">
                  <Text mr="2">Entre como</Text>
                  <Text fontWeight="bold">
                    <Link href="cadastro">Desenvolvedor</Link>
                  </Text>
                </Flex>
              </Stack>
            </VStack>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Home);
