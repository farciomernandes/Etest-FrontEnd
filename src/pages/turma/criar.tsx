import { Button, Flex, Icon, Stack, Text, HStack, Box, useToast } from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../components/Form/input";

import { useRouter } from "next/router";

import { useContext, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery } from "react-query";
import { api } from "../../services/api";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { queryClient } from "../../services/queryCliente";

function CriarTurma() {
  const toast = useToast();
  const router = useRouter();

  type criarTurma = {
    matricula: string;
    nome: string;
  };

  const criarTurmaFormSchema = yup.object().shape({
    matricula: yup.string().required("Nº de Matrícula obrigatória"),
    nome: yup.string().required("Nome da turma obrigatório"),
  });

  const handleCriar = useMutation(async (form: criarTurma) => {
    try {
      const response = await api.post(
        `/turma`,
        { matricula: form.matricula, nome: form.nome }
      );
      toast({
        title: "Turma criada com sucesso! Atualize sua página para ela aparecer na sua lista",
        status: "success",
        isClosable: true,
        position: 'top-right'
      }) 
      router.push(`/turma/${response.data.id}`);
    } catch (error) {
      toast({
        title: "Erro ao criar turma! Tente novamente",
        status: "error",
        isClosable: true,
        position: 'top-right'
      }) 
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(criarTurmaFormSchema),
  });

  const handlecriarTurma: SubmitHandler<criarTurma> = async (values) => {
    await handleCriar.mutateAsync(values);
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      direction="column"
    >
      <Head>
        <title>Criar Turma | E-test</title>
      </Head>
      
        <Header />
      <Flex
        w="100%"
        maxWidth={850}
        bg="white.900"
        p="50"
        py="100"
        mt="8"
        borderRadius={15}
        flexDirection="column"
      >
        <Box as="form" onSubmit={handleSubmit(handlecriarTurma)}>
          <Flex flexDirection="column" align="center" justify="center" mb="20">
            <Stack spacing="12">
              <Text
                fontSize="3xl"
                color="purple.800"
                align="center"
                justify="center"
                fontWeight="bold"
              >
                Criar Turma
              </Text>
            </Stack>
          </Flex>

          <Stack spacing="12" d="flex" align="center" justify="center">
            <Input
              name="matricula"
              error={formState.errors.matricula}
              {...register("matricula")}
              type="text"
              placeholder="Nº Matricula do Professor"
            />

            <Input
              name="nome"
              error={formState.errors.nome}
              {...register("nome")}
              type="text"
              placeholder="Nome da Turma"
              mb="20"
            />
          </Stack>

          <Stack spacing="12">
            <Button
              icon={null}
              href="/dashboard"
              color="white"
              h="57"
              size="lg"
              colorScheme="red"
              type="submit"
            >
              Cadastrar
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CriarTurma;

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
