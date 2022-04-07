import {
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  Box,
} from "@chakra-ui/react";
import { VscSignOut } from "react-icons/vsc";

import { useRouter } from "next/dist/client/router";
import { api } from "../../services/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TurmaDTO } from "../../types";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

function TurmasModal({ turmas }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  async function searchTurma(id) {
    try {
      const response = await api.get(`/turma/${id}`);
      router.push(`turma/${id}`);
    } catch (error) {
      alert("Erro ao buscar turma, tente novamente!");
    }
  }

  async function handleCriarTurma() {
    router.push(`turma/criar`);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        w="100%"
        type="button"
        h="57"
        onClick={onOpen}
        size="lg"
        bg="white.900"
        color="purple.800"
      >
        Minhas turmas
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="purple.500" maxWidth={720} mt="20vh" p="20">
          <ModalHeader justify="center" align="center" fontSize="3xl">
            Minhas turmas
          </ModalHeader>
          <ModalCloseButton />
          <VStack>
            <ModalBody>
              <VStack spacing="4">
                {turmas.map((turma: TurmaDTO) => (
                  <Flex
                    justify="center"
                    align="center"
                    flexDir="column"
                    key={turma.id}
                  >
                    <HStack justify="baseline" align="center">
                      <Text
                        bg="white"
                        fontWeight="regular"
                        color="purple.800"
                        p="3"
                        h="12"
                        align="center"
                        w="sm"
                        borderRadius="8"
                      >
                        {turma.nome}
                      </Text>
                      <Button
                        type="submit"
                        size="lg"
                        colorScheme="green"
                        p="4"
                        onClick={() => searchTurma(turma.id)}
                      >
                        <Icon color="white" as={VscSignOut} fontSize="20" />
                      </Button>
                    </HStack>
                    <Divider mt="2" />
                  </Flex>
                ))}
                {user.roles && (
                  <Button
                    w="100%"
                    type="button"
                    onClick={handleCriarTurma}
                    size="lg"
                    bg="white.900"
                    color="purple.800"
                  >
                    Criar Turma
                  </Button>
                )}
              </VStack>
            </ModalBody>

            <ModalFooter justify="center" align="center">
              <Button colorScheme="red" size="lg" w={150} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}


export default TurmasModal;