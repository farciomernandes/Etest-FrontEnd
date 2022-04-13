import {
  Spinner,
  Flex,
  Text,
  VStack,
  HStack,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../../../services/api";
import { Header } from "../../../../components/Header";
import AdicionarQuestao from "../../../../components/Modal/adicionarQuestao";
import { NavLink } from "../../../../components/NavLink";
import BancoQuestaoModal from "../../../../components/Modal/bancoquestao";

function EditarAvaliacao() {
  const router = useRouter();

  const [questoes, setQuestoes] = useState([]);


  const { data, isLoading, error } = useQuery("avaliacao", async () => {
    const id = router.query.id;
    const response = await api.get(`/avaliacao/${id}`);
    const data = response.data;
    return data;
  });

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />
      <Head>
        <title>Banco | E-test</title>
      </Head>
      <Flex w="100%" justify="space-around" align="baseline" mt="20">
        <Flex flexDir="column">
          <Flex flexDir="column" justify="center" align="center">
            <Text fontSize="3xl">Questões da prova</Text>
          </Flex>
          <VStack>
            <HStack mr="auto" w="100%" justify="space-between" b="solid">
              <HStack spacing="4">
                <AdicionarQuestao />
                <NavLink
                  w="100%"
                  type="button"
                  icon={null}
                  href="/banco/adicionar"
                  h="57"
                  size="lg"
                  bg="white.900"
                  color="purple.800"
                >
                  Criar questão
                </NavLink>
              </HStack>
            </HStack>
            {isLoading ? (
              <Spinner />
            ) : (
              data.questoes.map((questao) => (
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
                          w="15000%"
                          whiteSpace="nowrap"
                          minW={210}
                          bg="white"
                          color="red"
                          border="1px"
                          align="center"
                          borderColor="red"
                          fontWeight="bold"
                        >
                          {questao.disciplina}
                        </Box>

                        <Box
                          p="1"
                          rounded="md"
                          w="100%"
                          minW={210}
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
                          minW={200}
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
                          minW={210}
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
              ))
            )}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default EditarAvaliacao;
