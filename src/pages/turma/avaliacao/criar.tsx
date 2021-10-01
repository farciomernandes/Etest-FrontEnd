import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  HStack,
  Box,
  VStack,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../../components/Form/input";

import { useRouter } from "next/router";

import { useState } from "react";
import { connect } from "react-redux";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../../services/api";

function CriarAvaliacao({ dispatch, user }) {
  const [tipo, setTipo] = useState("");

  const router = useRouter();

  type criarAvaliacao = {
    alternativa1: string;
    alternativa2: string;
    alternativa3: string;
    alternativa4: string;
    correta: string;
    dataAvaliacao: Date;
  };

  const criarAvaliacaoFormSchema = yup.object().shape({
    descricao: yup.string().required("Enunciado obrigatório"),
    alternativa1: yup.string().required("Alternativa 1 obrigatória"),
    alternativa2: yup.string().required("Alternativa 2 obrigatória"),
    alternativa3: yup.string().required("Alternativa 3 obrigatória"),
    alternativa4: yup.string().required("Alternativa 4 obrigatória"),
    correta: yup.string().required("Resposta correta obrigatória"),
    dataAvaliacao: yup.string().required("Data da avaliação obrigatória"),
  });

  const handleCriar = useMutation(async (form: criarAvaliacao) => {
    try {
      await api.post(
        `/Avaliacao`,
        {
          alternativa1: form.alternativa1,
          alternativa2: form.alternativa2,
          alternativa3: form.alternativa3,
          alternativa4: form.alternativa4,
          correta: form.correta,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      /**const response = await api.post("/autenticacao", {
        alternativa1: form.alternativa1,
        senha: form.senha,
      }); */
      const { data } = { data: {} };

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
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
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
                <Button
                  icon={null}
                  href="/dashboard"
                  color="white"
                  h="45"
                  size="lg"
                  colorScheme="green"
                  type="submit"
                >
                  Buscar no banco de questões
                </Button>
                <Button
                  icon={null}
                  href="/dashboard"
                  color="purple.800"
                  h="45"
                  size="lg"
                  colorScheme="gray"
                  type="submit"
                >
                  Criar e adicionar questão
                </Button>
              </HStack>
            </VStack>
          </Flex>

          <Stack spacing="8" d="flex" align="center" justify="center">
            <Input
              variant="flushed"
              name="descricao"
              error={formState.errors.descricao}
              {...register("descricao")}
              type="text"
              placeholder="Enunciado da questão"
            />
            <Input
              variant="flushed"
              name="alternativa1"
              error={formState.errors.alternativa1}
              {...register("alternativa1")}
              type="text"
              placeholder="Primeira alternativa"
            />
            <Input
              variant="flushed"
              name="alternativa2"
              error={formState.errors.alternativa2}
              {...register("alternativa2")}
              type="text"
              placeholder="Segunda alternativa"
            />

            <Input
              variant="flushed"
              name="alternativa3"
              error={formState.errors.alternativa3}
              {...register("alternativa3")}
              type="text"
              placeholder="Terceira alternativa"
            />

            <Input
              variant="flushed"
              name="alternativa4"
              error={formState.errors.alternativa4}
              {...register("alternativa4")}
              type="text"
              placeholder="Quarta alternativa"
            />

            <Input
              variant="flushed"
              name="correta"
              error={formState.errors.correta}
              {...register("correta")}
              type="text"
              placeholder="Resposta da questão"
            />

            <HStack justify="flex-start" align="center" w="100%">
              <Select
                placeholder="Disciplina"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
              >
                <option value="informatica">Informática</option>
                <option value="português">Português</option>
                <option value="matematica">Matemática</option>
              </Select>
              <Select
                placeholder="Unidade"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
              >
                <option value="option1">Opção 1</option>
                <option value="option2">Opção 2</option>
                <option value="option3">Opção 3</option>
              </Select>
              <Select
                placeholder="Assunto"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
              >
                <option value="option1">Redes de computadores</option>
                <option value="option2">Programação Orientada a Objetos</option>
                <option value="option3">Lógica e Algorítmos</option>
              </Select>
              <Select
                placeholder="Dificuldade"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
              >
                <option value="1">Fácil</option>
                <option value="2">Moderado</option>
                <option value="3">Dificíl</option>
              </Select>
            </HStack>
          </Stack>

          <Stack spacing="12" mt="8">
            <Flex>
              <NumberInput
                defaultValue={1}
                min={1}
                max={15}
                color="purple.800"
                h="110%"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                name="dataAvaliacao"
                error={formState.errors.dataAvaliacao}
                {...register("dataAvaliacao")}
                type="text"
                placeholder="Data da avaliação 20/10/2021"
              />
            </Flex>

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
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(CriarAvaliacao);
