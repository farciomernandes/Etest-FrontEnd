import { Button, Flex, Icon, Stack, Text, HStack, Box } from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../components/Form/input";

import { useRouter } from "next/router";

import { useState } from "react";
import { connect } from "react-redux";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../services/api";

function CriarTurma({ dispatch, user }) {
  const [tipo, setTipo] = useState("");

  const router = useRouter();

  type criarTurma = {
    matricula: string;
    nome: string;
    senha: string;
  };

  const criarTurmaFormSchema = yup.object().shape({
    matricula: yup.string().required("Nº de Matrícula obrigatória"),
    nome: yup.string().required("Nome da turma obrigatório"),
    senha: yup.string().required("Senha obrigatória"),
  });

  const handleCriar = useMutation(async (form: criarTurma) => {
    try {
      await api.post(
        `/turma`,
        { matricula: form.matricula, nome: form.nome },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const response = await api.post("/autenticacao", {
        matricula: form.matricula,
        senha: form.senha,
      });
      const { data } = response;

      dispatch({
        type: "SIGN_IN_SUCCESS",
        payload: data,
      });

      router.push(`/dashboard`);
    } catch (error) {
      dispatch({
        type: "SIGN_IN_FAILURE",
        payload: error,
      });
      alert("Erro ao criar turma, tente novamente!");
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
      justify="center"
      direction="column"
    >
      <Head>
        <title>Criar Turma | E-test</title>
      </Head>
      <Flex
        w="100%"
        maxWidth={850}
        bg="white.900"
        p="50"
        py="100"
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
              name="senha"
              error={formState.errors.senha}
              {...register("senha")}
              type="password"
              placeholder="Senha do usuário"
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
const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(CriarTurma);
