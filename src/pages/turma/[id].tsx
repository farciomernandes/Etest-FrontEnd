/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";

import { format, parseISO } from "date-fns";

import { NavLink } from "../../components/NavLink";

import { FiTrash } from "react-icons/fi";

import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import AdicionarComentario from "../../components/Modal/Form/comentario";
import AdicionarAluno from "../../components/Modal/adicionaaluno";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useMutation, useQuery } from "react-query";
import { AuthContext } from "../../contexts/AuthContext";

import { queryClient } from "../../services/queryCliente";

import {  MdRemoveCircle  } from 'react-icons/md';

function Turma() {
  const toast = useToast()
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery("turma", async () => {
    const response = await api.get(`/turma/${router.query.id}`);
    const data = response.data;

    return data;
  });

  const handleDeletar = useMutation(async (idComentario: String) => {
    try {
      await api.delete("/comentario", {
        data: {
          idUsuario: user.id,
          idTurma: data.id,
          idComentario: idComentario,
        },
      });
      queryClient.invalidateQueries("turma");
    } catch (error) {
      alert("Erro ao deletar comentário, tente novamente!");
      toast({
        title: "Erro co deletar comentário!",
        status: "error",
        isClosable: true,
      })
    }
  });

  const deletar = async (values) => {
    await handleDeletar.mutateAsync(values);
  };

  async function searchAvaliacao(id) {
    try {
      const response = await api.get(`/avaliacao/${id}`);
      /* SALVAR DO JEITO CERTO
      dispatch({
        type: "AVALIACAO_SUCCESS",
        payload: response.data,
      });
       */
      router.push(`/turma/avaliacao/${id}`);
    } catch (error) {
      toast({
        title: "Erro ao buscar turma, tente novamente!",
        status: "error",
        isClosable: true,
        position: 'top-right'
      }) 
    }
  }


  const handleAtualizar = useMutation(async (alunoMatricula: String) => {
    try {
      await api.put(`/turma`,{
        matricula:alunoMatricula,
        idTurma: data.id
      });
      queryClient.invalidateQueries("turma");
    } catch (error) {
      alert("Erro ao expulsar aluno, tente novamente!");
    }
  });

  const atualizar = async (values) => {
    await handleAtualizar.mutateAsync(values);
  };

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Head>
        <title>Turma | E-test</title>
      </Head>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex w="100%" my="6" justify="space-around" align="baseline" mt="2">
          <Flex mt="20" flexDir="column" maxWidth="30vw">
            <Flex flexDir="column" justify="center" align="flex-start">
              <Text fontSize="4xl">Novos:</Text>

              {data.avaliacoes.length > 0 ? (
                data.avaliacoes.map((avaliacao) => {
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
                        {user?.roles ? (
                          <HStack>
                            <NavLink
                              icon={null}
                              w="100%"
                              href={`/turma/avaliacao/editar/${avaliacao.id}`}
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
                    {data.alunos.map((aluno) => (
                      <Box id={aluno.id}>
                        <HStack>

                        <Text fontWeight="regular">
                          {aluno.nome} - {aluno.matricula}
                        </Text>
                        <Button
                        color="white"
                        type="button"
                        colorScheme="red"
                        size="sm"
                        onClick={() => atualizar(aluno.matricula)}
                      >
                     <Icon color="white" as={MdRemoveCircle} fontSize="14" />
                      </Button>
                        </HStack>

                      </Box>
                       
                    ))}
                  </VStack>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" w="100%" justify="center" maxW="50vw">
            <Flex justify="space-between" align="flex-end" mb="2">
              <Flex flexDir="column">
                <Text fontSize="3xl">Turma: {data.nome}</Text>
                <Text fontWeight="bold" fontSize="4xl">
                  Prof: {data.nomeProfessor}
                </Text>
              </Flex>

              {user?.roles ? (
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
              ) : null}
            </Flex>

            <VStack bottom="8">
              {data.comentarios.length > 0 ? (
                data.comentarios.map((comentario) => (
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
                          name={data.nomeProfessor}
                          src="://.com/farciomernandes.png"
                        />
                        <Text color="white.200" ml="3">
                          {data.nomeProfessor}
                        </Text>
                      </Flex>
                      {user?.roles ? (
                        <>
                          <Icon
                            onClick={() => deletar(comentario.id)}
                            as={FiTrash}
                            color="red"
                            fontSize="20"
                            cursor="pointer"
                          />{" "}
                        </>
                      ) : null}
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

              {user?.roles ? (
                <>
                  <AdicionarComentario turmaId={data.id} />
                </>
              ) : null}
            </VStack>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Turma;

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
