import {
  Button,
  Flex,
  Stack,
  Text,
  HStack,
  Box,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../../../components/Form/input";

import { useRouter } from "next/router";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../../../services/api";
import { Header } from "../../../../components/Header";

function CriarAvaliacao() {
  const [tipo, setTipo] = useState("");
  const toast = useToast();



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
      await api.post(
        `/avaliacao`,
        {
          dataProva: form.dataProva,
          nome: form.nome,
          turmaId: router.query.id,
        }
      );
      toast({
        title: "Avaliação marcada com sucesso!",
        status: "success",
        isClosable: true,
        position: 'top-right'
      }) 
      router.push(`/dashboard`);
    } catch (error) {
      toast({
        title: "Erro ao criar Avaliacao, tente novamente!",
        status: "error",
        isClosable: true,
        position: 'top-right'
      }) 
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
            mt="4"
          >
            Criar Avaliação
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CriarAvaliacao;
