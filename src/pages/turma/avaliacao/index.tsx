/* eslint-disable react/jsx-key */
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  Button,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import { useQuery } from "react-query";

import { format, parseISO } from "date-fns";

import { NavLink } from "../../../components/NavLink";

import { FiTrash } from "react-icons/fi";

import { useRouter } from "next/router";

import { Header } from "../../../components/Header";
import { api } from "../../../services/api";
import AdicionarComentario from "../../../components/Modal/Form/comentario";
import AdicionarAluno from "../../../components/Modal/adicionaaluno";
import { useState } from "react";
import { TurmaDTO, UserDTO } from "../../../types";

function Avaliacao() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [turma, setTurma] = useState<TurmaDTO>();
  const [user, setUser] = useState<UserDTO>();


  const handleDeletar = async (idComentario) => {
    try {
      await api.delete("/comentario", {
        data: {
          idUsuario: user.id,
          idTurma: turma.id,
          idComentario: idComentario,
        },
      });
      router.push("/dashboard");
    } catch (error) {
      alert("Erro ao deletar comentário, tente novamente!");
    }
  };

  async function searchAvaliacao(id) {
    try {
      const response = await api.get(`/avaliacao/${router.query.id}`);
      /**Salvar de outra forma 
      dispatch({
        type: "AVALIACAO_SUCCESS",
        payload: response.data,
      });
      */
      router.push(`/turma/avaliacao/${router.query.id}`);
    } catch (error) {
      /** TOAST DE ERRO
      dispatch({
        type: "AVALIACAO_FAILURE",
        payload: error,
      });
      alvar */
      alert("Erro ao buscar turma, tente novamente!");
    }
  }

  const { data, error } = useQuery("avaliacao", async () => {
    const response = await api.get("/avaliacao");
    const data = response.data;

    return data;
  });


  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Head>
        <title>Avaliação | E-test</title>
      </Head>
      <Header />

      {isLoading ? (
        <Spinner />
      ) : (
        <Flex w="100%" my="6" justify="space-around" align="baseline" mt="2">
          <Flex mt="20" flexDir="column" maxWidth="30vw">
            <Flex flexDir="column" justify="center" align="flex-start">
              <Text fontSize="4xl">Novos:</Text>

              {turma.avaliacoes.length > 0 ? (
                turma.avaliacoes.map((avaliacao) => {
                  return (
                    <Flex
                      bg="red.500"
                      key={avaliacao.id}
                      w="90%"
                      justify="center"
                      align="flex-start"
                      p="12"
                      my="5"
                      borderRadius="10"
                    >
                      <Box>
                        <VStack mb="8">
                          <Text fontSize="3xl" fontWeight="bold">
                            {avaliacao.nome}
                          </Text>
                          <Text fontWeight="regular">
                            Data:{" "}
                            {format(
                              parseISO(avaliacao.dataProva),
                              "dd/MM/yyyy',' HH:mm"
                            )}
                          </Text>
                        </VStack>
                        {user.roles != null ? (
                          <HStack>
                            <NavLink
                              icon={null}
                              w="100%"
                              href={`/turma/avaliacao/editar/${router.query.id}`}
                              size="lg"
                              bg="green.600"
                              color="white"
                            >
                              Ver Prova
                            </NavLink>
                          </HStack>
                        ) : (
                          <Button
                            icon={null}
                            bg="#38A169"
                            color="white"
                            type="submit"
                            colorScheme="green"
                            size="lg"
                            onClick={() => searchAvaliacao(avaliacao.id)}
                          >
                            Fazer prova
                          </Button>
                        )}
                      </Box>
                    </Flex>
                  );
                })
              ) : (
                <Flex
                  bg="red.500"
                  w="65%"
                  justify="center"
                  align="flex-start"
                  p="12"
                  my="5"
                  borderRadius="10"
                >
                  <Box justify="center" align="center">
                    <VStack mb="8">
                      <Text fontSize="3xl" fontWeight="bold">
                        Nenhuma avaliação marcada
                      </Text>
                    </VStack>
                  </Box>
                </Flex>
              )}
              <Flex
                bg="white"
                w="65%"
                justify="center"
                align="flex-start"
                p="12"
                my="5"
                color="black"
                borderRadius="10"
              >
                <Box>
                  <VStack mb="8">
                    <Text fontSize="3xl" fontWeight="bold">
                      Alunos
                    </Text>
                    {turma.alunos.map((aluno) => (
                      <Box id={aluno.id}>
                        <Text fontWeight="regular">
                          {aluno.nome} - {aluno.matricula}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                  <Button
                    color="white"
                    type="button"
                    colorScheme="purple"
                    size="lg"
                  >
                    Expulsar aluno
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" w="100%" justify="center" maxW="50vw">
            <Flex justify="space-between" align="flex-end" mb="2">
              <Flex flexDir="column">
                <Text fontSize="3xl">Turma: {turma.nome}</Text>
                <Text fontWeight="bold" fontSize="4xl">
                  Prof: {turma.nomeProfessor}
                </Text>
              </Flex>

              {user.roles && (
                <HStack>
                  <AdicionarAluno />
                  <NavLink
                    icon={null}
                    w="100%"
                    href={`/turma/avaliacao/criar/${router.query.id}`}
                    size="lg"
                    bg="white.900"
                    color="purple.800"
                  >
                    Add Avaliação
                  </NavLink>
                </HStack>
              )}
            </Flex>

            <VStack bottom="8">
              {turma.comentarios.length > 0 ? (
                turma.comentarios.map((comentario) => (
                  <Box
                    bg="white"
                    p="8"
                    borderRadius="10"
                    w="50vw"
                    key={comentario.id}
                  >
                    <Text color="black">{comentario.texto}</Text>
                    <HStack justify="space-between" align="center" pt="8">
                      <Flex justify="center" align="center">
                        <Avatar
                          size="sm"
                          name={turma.nomeProfessor}
                          src="://.com/farciomernandes.png"
                        />
                        <Text color="white.200" ml="3">
                          {turma.nomeProfessor}
                        </Text>
                      </Flex>
                      {user.roles && (
                        <>
                          <Icon
                            onClick={() => handleDeletar(comentario.id)}
                            as={FiTrash}
                            color="red"
                            fontSize="20"
                          />{" "}
                        </>
                      )}
                    </HStack>
                  </Box>
                ))
              ) : (
                <Box bg="white" p="8" borderRadius="10" w="50vw">
                  <Text color="black">
                    Não existe nenhum comentário nesta turma
                  </Text>
                </Box>
              )}

              {user.roles && (
                <>
                  <AdicionarComentario turmaId={turma.id} />
                </>
              )}
            </VStack>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Avaliacao;
