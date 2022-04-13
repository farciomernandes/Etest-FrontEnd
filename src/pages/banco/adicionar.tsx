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
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../components/Form/input";

import { useRouter } from "next/router";

import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { Header } from "../../components/Header";

function AdicionarQuestao() {
  const toast = useToast();

  const [disciplina, setDisciplina] = useState("Disciplina");
  const [unidade, setUnidade] = useState("Unidade");
  const [assunto, setAssunto] = useState("Assunto");
  const [dificuldade, setDificuldade] = useState("Dificuldade");
  const [correta, setCorreta] = useState("Correta");


  const router = useRouter();

  type adicionarQuestao = {
    descricao: string;
    alternativa1: string;
    alternativa2: string;
    alternativa3: string;
    alternativa4: string;
    correta: string;
  };

  const adicionarQuestaoFormSchema = yup.object().shape({
    descricao: yup.string().required("Enunciado obrigatório"),
    alternativa1: yup.string().required("Alternativa 1 obrigatória"),
    alternativa2: yup.string().required("Alternativa 2 obrigatória"),
    alternativa3: yup.string().required("Alternativa 3 obrigatória"),
    alternativa4: yup.string().required("Alternativa 4 obrigatória"),
    correta: yup.string().required("Resposta correta obrigatória"),
  });

  const handleCriar = useMutation(async (form: adicionarQuestao) => {
    alert("entrou 2")
    try {
      await api.post(
        `/questao`,
        {
          descricao: form.descricao,
          alternativas: [
            {
              descricao: form.alternativa1,
              correta: correta === "alternativa1" ? true : false
            },
            {
              descricao: form.alternativa2,
              correta: correta === "alternativa2" ? true : false
            },
            {
              descricao: form.alternativa3,
              correta: correta === "alternativa3" ? true : false
            },
            {
              descricao: form.alternativa4,
              correta: correta === "alternativa4" ? true : false
            },
          ],
          disciplina,
          unidade,
          assunto,
          nivel: dificuldade,
        }
      );
      toast({
        title: "Questão adicionada com sucesso!",
        status: "success",
        isClosable: true,
        position: 'top-right'
      }) 
      router.push(`/dashboard`);
    } catch (error) {
      toast({
        title: "Erro ao adicionar questão, tente novamente!",
        status: "error",
        isClosable: true,
        position: 'top-right'
      }) 
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(adicionarQuestaoFormSchema),
  });

  const handleadicionarQuestao: SubmitHandler<adicionarQuestao> = async (values) => {
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
        <title>Adicionar ao Banco | E-test</title>
      </Head>
      <Header />

      <Flex
        w="100%"
        maxWidth={850}
        bg="white.900"
        p="50"
        py="100"
        borderRadius={15}
        flexDirection="column"
      >
        <Box as="form" onSubmit={handleSubmit(handleadicionarQuestao)}>
          <Flex flexDirection="column" align="center" justify="center" mb="8">
            <VStack w="100%" justify="center" align="flex-start">
              <Text
                fontSize="3xl"
                color="purple.800"
                align="center"
                justify="center"
                fontWeight="bold"
              >
                Criar Questão
              </Text>
            </VStack>
          </Flex>

          <Stack spacing="8" d="flex" align="center" justify="center">
            <Input
              variant="flushed"
              name="descricao"
              error={formState.errors.descricao}
              type="text"
              placeholder="Enunciado da questão"
              {...register("descricao")}
            />
            <HStack w="100%" color="purple.500">
            <b>a. </b>
            <Input
              variant="flushed"
              name="alternativa1"
              error={formState.errors.alternativa1}
              type="text"
              placeholder="Primeira alternativa"
              {...register("alternativa1")}
            />
            </HStack>

            <HStack w="100%" color="purple.500">
            <b>b. </b>
            <Input
              variant="flushed"
              name="alternativa2"
              error={formState.errors.alternativa2}
              type="text"
              placeholder="Segunda alternativa"
              {...register("alternativa2")}
            />
            </HStack>

            <HStack w="100%" color="purple.500">
            <b>c. </b>
            <Input
              variant="flushed"
              name="alternativa3"
              error={formState.errors.alternativa3}
              type="text"
              placeholder="Terceira alternativa"
              {...register("alternativa3")}
            />
            </HStack>
           

             <HStack w="100%" color="purple.500">
            <b>d. </b>
            
            <Input
              variant="flushed"
              name="alternativa4"
              error={formState.errors.alternativa4}
              type="text"
              placeholder="Quarta alternativa"
              {...register("alternativa4")}
            />

           
            </HStack>
            <Select
                placeholder="Selecione a alternativa correta"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
                onChange={(e) => setCorreta(e.target.value)}
                {...register("correta")}
              >
                <option value="alternativa1">Letra a</option>
                <option value="alternativa2">Letra b</option>
                <option value="alternativa3">Letra c</option>
                <option value="alternativa4">Letra d</option>
              </Select>

            <HStack justify="flex-start" align="center" w="100%">
              <Select
                placeholder="Disciplina"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
                onChange={(e) => setDisciplina(e.target.value)}
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
                onChange={(e) => setUnidade(e.target.value)}
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
                onChange={(e) => setAssunto(e.target.value)}
              >
                <option value="Redes de computadores">
                  Redes de computadores
                </option>
                <option value="Programação Orientada a Objetos">
                  Programação Orientada a Objetos
                </option>
                <option value="Lógica e Algorítmos">Lógica e Algorítmos</option>
              </Select>
              <Select
                placeholder="Dificuldade"
                borderColor="red"
                color="purple.800"
                fontWeight="bold"
                onChange={(e) => setDificuldade(e.target.value)}
              >
                <option value="1">Fácil</option>
                <option value="2">Moderado</option>
                <option value="3">Dificíl</option>
              </Select>
            </HStack>
          </Stack>

          <Stack spacing="12" mt="8">
            <Button
              icon={null}
              color="white"
              h="57"
              size="lg"
              colorScheme="green"
              type="submit"
            >
              Adicionar ao banco de questões
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default AdicionarQuestao;
