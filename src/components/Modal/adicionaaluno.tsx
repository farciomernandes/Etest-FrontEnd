import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import Head from "next/head";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryCliente";

const AdicionarAluno = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { query } = useRouter();

  type adicionaraluno = {
    matricula: string;
  };

  const adicionaralunoFormSchema = yup.object().shape({
    matricula: yup.string().required("Nº de Matrícula obrigatória"),
  });

  const handleCriar = useMutation(async (form: adicionaraluno) => {
    try {
      await api.post(
        `/turma/adicionar`,
        { matricula: form.matricula, idTurma: query.id });

        queryClient.invalidateQueries("turma");
        toast({
          title: "Adicionado com sucesso!",
          status: "success",
          isClosable: true,
          position: 'top-right'
        }) 
        reset();
      } catch (error) {
      toast({
        title: "Erro ao adicionar, tente novamente!!",
        status: "error",
        isClosable: true,
        position: 'top-right'
      }) 
    }
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(adicionaralunoFormSchema),
  });

  const handleadicionaraluno: SubmitHandler<adicionaraluno> = async (
    values
  ) => {
    await handleCriar.mutateAsync(values);
  };

  return (
    <>
      <Flex onClick={onOpen}>
        <HStack justify="baseline" align="center">
          <Button fontWeight="bold" colorScheme="green" size="lg">
            Add Aluno
          </Button>
        </HStack>
        <Divider />
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="white"
          maxWidth={720}
          mt="20vh"
          p="20"
          justify="center"
          align="center"
        >
          <VStack
            spacing="8"
            as="form"
            onSubmit={handleSubmit(handleadicionaraluno)}
          >
            <ModalBody>
              <Flex align="center" justify="center" direction="column">
                <Box>
                  <Flex
                    flexDirection="column"
                    align="center"
                    justify="center"
                    mb="20"
                  >
                    <Stack spacing="8">
                      <Text
                        fontSize="3xl"
                        color="purple.800"
                        align="center"
                        justify="center"
                        fontWeight="bold"
                      >
                        Adicionar Aluno
                      </Text>
                    </Stack>
                  </Flex>

                  <Stack spacing="12" d="flex" align="center" justify="center">
                    <Input
                      name="matricula"
                      error={formState.errors.matricula}
                      {...register("matricula")}
                      type="text"
                      placeholder="Matricula do Aluno"
                      color="purple.800"
                    />
                  </Stack>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter justify="center" align="center">
              <Button
                colorScheme="red"
                size="lg"
                w={150}
                type="submit"
                justify="center"
                align="center"
              >
                Adicionar
              </Button>
            </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdicionarAluno;
