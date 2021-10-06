import {
  Button,
  Flex,
  Stack,
  Text,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../../../components/Form/input";

import { useRouter } from "next/router";

import { useState } from "react";
import { connect } from "react-redux";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../../../services/api";
import { Header } from "../../../../components/Header";
import { NavLink } from "../../../../components/NavLink";

function CriarAvaliacao({ dispatch, user }) {
  const [tipo, setTipo] = useState("");

  const router = useRouter();

  type criarAvaliacao = {
    dataProva: Date;
    nome: string;
  };

  const criarAvaliacaoFormSchema = yup.object().shape({
    dataProva: yup.string().required("Data obrigatória"),
    nome: yup.string().required("Nome obrigatório"),
  });

  const handleCriar = useMutation(async (form: criarAvaliacao) => {
    try {
      console.log("OXE");
      console.log(form);
      await api.post(
        `/avaliacao`,
        {
          dataProva: form.dataProva,
          nome: form.nome,
          turmaId: router.query.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Avaliação marcada com sucesso!");
      router.push(`/dashboard`);
    } catch (error) {
      dispatch({
        type: "SIGN_IN_FAILURE",
        payload: error,
      });
      alert("Erro ao criar Avaliacao, tente novamente!");
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(criarAvaliacaoFormSchema),
  });

  const handlecriarAvaliacao: SubmitHandler<criarAvaliacao> = async (
    values
  ) => {
    await handleCriar.mutateAsync(values);
  };

  return (
    <Flex w="100vw" align="center" justify="center" direction="column">
      <Header />

      <Head>
        <title>Criar Avaliacao | E-test</title>
      </Head>

      <Flex
        w="100%"
        maxWidth={850}
        bg="white.900"
        p="50"
        py="100"
        borderRadius={15}
        flexDirection="column"
        mt="20"
      >
        <Box as="form" onSubmit={handleSubmit(handlecriarAvaliacao)}>
          <Flex flexDirection="column" align="center" justify="center" mb="8">
            <VStack w="100%" justify="center" align="flex-start">
              <Text
                fontSize="3xl"
                color="purple.800"
                align="center"
                justify="center"
                fontWeight="bold"
              >
                Criar Avaliacao
              </Text>
              <HStack spacing="8">
                <NavLink
                  icon={null}
                  href="/banco"
                  color="white"
                  h="45"
                  size="lg"
                  colorScheme="green"
                  type="submit"
                >
                  Buscar no banco de questões
                </NavLink>
                <NavLink
                  icon={null}
                  href="/banco/adicionar"
                  color="purple.800"
                  h="45"
                  size="lg"
                  colorScheme="gray"
                >
                  Adicionar nova questão
                </NavLink>
              </HStack>
            </VStack>
          </Flex>

          <Stack spacing="12" mt="8" justify="space-around">
            <Flex align="center" justify="center">
              <Text fontWeight="bold" color="purple.800" whiteSpace="nowrap">
                Data da Avaliação
              </Text>
              <Input
                name="dataProva"
                error={formState.errors.dataProva}
                {...register("dataProva")}
                type="date"
                ml="2"
                w="30%"
              />
            </Flex>
            <Input
              name="nome"
              error={formState.errors.nome}
              {...register("nome")}
              type="text"
              placeholder="Titulo da avaliação"
            />
          </Stack>

          <Button
            icon={null}
            href="/dashboard"
            color="white"
            h="57"
            size="lg"
            colorScheme="red"
            type="submit"
          >
            Criar Avaliação
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(CriarAvaliacao);
