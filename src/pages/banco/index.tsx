import {
  Select,
  Flex,
  Text,
  VStack,
  HStack,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import BancoQuestaoModal from "../../components/Modal/bancoquestao";
import Head from "next/head";
import { GrFormAdd } from "react-icons/gr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "../../components/NavLink";
import { useQuery } from "react-query";
import { api } from "../../services/api";

function ListarBanco() {
  const router = useRouter();

  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    async function loadingQuestoes() {
      const response = await api.get("/questao");
      const data = response.data;

      setQuestoes(data);
    }

    loadingQuestoes();
  }, []);

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />
      <Head>
        <title>Banco | E-test</title>
      </Head>
      <Flex w="100%" justify="space-around" align="baseline" mt="20">
        <Flex flexDir="column">
          <Flex flexDir="column" justify="center" align="center">
            <Text fontSize="3xl">Banco de Questões</Text>
          </Flex>
          <VStack>
            <Text mr="auto" fontWeight="bold" fontSize="2xl">
              Filtros
            </Text>

            <HStack mr="auto" w="100%" justify="space-between" b="solid">
              <Flex w="100%">
                <Select
                  placeholder="Disciplina"
                  p="1"
                  w="100%"
                  minW={130}
                  color="purple.800"
                  border="1px"
                  align="center"
                  bg="white"
                >
                  <option value="option1">Algoritmos</option>
                  <option value="option2">Calculo 1</option>
                  <option value="option3">P.O.O</option>
                </Select>

                <Select
                  placeholder="Unidade"
                  p="1"
                  w="100%"
                  minW={120}
                  color="purple.800"
                  border="1px"
                  align="center"
                  bg="white"
                >
                  <option value="option1">Desvios condicionais</option>
                  <option value="option2">Integrais</option>
                  <option value="option3">Classes Abstratas</option>
                </Select>

                <Select
                  placeholder="Assunto"
                  p="1"
                  w="100%"
                  minW={120}
                  color="purple.800"
                  border="1px"
                  align="center"
                  bg="white"
                >
                  <option value="option1">Programação</option>
                  <option value="option2">Matemática</option>
                  <option value="option3">Programação</option>
                </Select>

                <Select
                  placeholder="Dificuldade"
                  p="1"
                  w="100%"
                  minW={140}
                  color="purple.800"
                  border="1px"
                  align="center"
                  bg="white"
                >
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </Select>
              </Flex>
              <Flex>
                <NavLink
                  w="100%"
                  type="button"
                  icon={null}
                  href="banco/adicionar"
                  h="57"
                  size="lg"
                  bg="white.900"
                  color="purple.800"
                >
                  Criar questão
                </NavLink>
              </Flex>
            </HStack>
            {questoes.map((questao) => (
              <Flex
                bg="white"
                p="8"
                borderRadius="10"
                maxWidth="90vw"
                minWidth="70vw"
                mt="8"
                key={questao.id}
              >
                <Flex
                  width="100%"
                  d="flex"
                  justify="space-between"
                  align="center"
                >
                  <Stack px="8">
                    <Text fontWeight="bold" fontSize="2xl" color="purple.800">
                      {questao.descricao}
                    </Text>
                    <HStack>
                      <Box
                        p="1"
                        rounded="md"
                        w="100%"
                        minW={110}
                        bg="white"
                        color="red"
                        border="1px"
                        align="center"
                        borderColor="red"
                        fontWeight="bold"
                        aling="center"
                      >
                        {questao.disciplina}
                      </Box>

                      <Box
                        p="1"
                        rounded="md"
                        w="100%"
                        minW={110}
                        bg="white"
                        color="red"
                        border="1px"
                        align="center"
                        borderColor="red"
                        fontWeight="bold"
                      >
                        {questao.unidade}
                      </Box>

                      <Box
                        p="1"
                        rounded="md"
                        w="500%"
                        minW={110}
                        bg="white"
                        color="red"
                        border="1px"
                        align="center"
                        borderColor="red"
                        fontWeight="bold"
                        whiteSpace="nowrap"
                      >
                        {questao.assunto}
                      </Box>

                      <Box
                        p="1"
                        rounded="md"
                        w="100%"
                        minW={110}
                        bg="white"
                        color="red"
                        border="1px"
                        align="center"
                        borderColor="red"
                        fontWeight="bold"
                      >
                        {questao.nivel}
                      </Box>
                    </HStack>
                  </Stack>
                  <BancoQuestaoModal questao={questao} />
                </Flex>
              </Flex>
            ))}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default ListarBanco;
