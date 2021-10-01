import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";

import { useEffect } from "react";

import { format, parseISO } from "date-fns";

import { FiTrash } from "react-icons/fi";

import { connect } from "react-redux";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { NavLink } from "../../components/NavLink";
import { api } from "../../services/api";
import AdicionarComentario from "../../components/Modal/Form/comentario";

function Turma({ turma, user, dispatch }) {
  const router = useRouter();

  const handleDeletar = async (idComentario) => {
    try {
      await api.delete("/comentario", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          idUsuario: user.usuario.id,
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
      const response = await api.get(`/avaliacao/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({
        type: "AVALIACAO_SUCCESS",
        payload: response.data,
      });
      router.push(`/turma/avaliacao/${id}`);
    } catch (error) {
      dispatch({
        type: "AVALIACAO_FAILURE",
        payload: error,
      });
      alert("Erro ao buscar turma, tente novamente!");
    }
  }

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Head>
        <title>Turma | E-test</title>
      </Head>
      <Header />

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
                    w="65%"
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
                    <Text fontWeight="regular">Prazo: 00/00/00</Text>
                  </VStack>
                  <NavLink
                    icon={null}
                    href="/turma/avaliacao"
                    bg="#38A169"
                    color="white"
                    type="button"
                    colorScheme="green"
                    size="lg"
                  >
                    Botão
                  </NavLink>
                </Box>
              </Flex>
            )}

            {/**FUNDO BRANCO
           * 
           *    <Flex bg="white" w="65%" justify="center" align="flex-start" p="12"
            my="5" color="black"
            borderRadius="10"
          >
            <Box>
              <VStack mb="8">
                <Text fontSize="3xl" fontWeight="bold">{avaliacao.nome}</Text>
                <Text fontWeight="regular">Prazo:{avaliacao.dataProva}</Text>
              </VStack>
              <NavLink icon={null} href="/turma/avaliacao"
                bg="#38A169" color="white" type="submit"
                colorScheme="green"
                size="lg"
              >
                Definir lembrete
              </NavLink>
            </Box>

          </Flex>
           */}
          </Flex>
        </Flex>
        <Flex flexDir="column">
          <Flex flexDir="column">
            <Text fontSize="3xl">Turma: {turma.nome}</Text>
            <Text fontWeight="bold" fontSize="4xl">
              Prof: {turma.nomeProfessor}
            </Text>
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
                    <Icon
                      onClick={() => handleDeletar(comentario.id)}
                      as={FiTrash}
                      color="red"
                      fontSize="20"
                    />
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

            <AdicionarComentario turmaId={turma.id} />
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state) => ({
  turma: state.turma.turma,
  user: state.user.user,
});

export default connect(mapStateToProps)(Turma);
