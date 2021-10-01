import { Button, Flex, Icon, Stack, Text, HStack, Box } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/radio";
import Link from "next/link";
import Head from "next/head";

import { Input } from "../components/Form/input";
import Image from "next/image";
import { VscSignOut } from "react-icons/vsc";

import logoImg from "../assets/images/logo.svg";
import RadioCard from "../components/RadioCard";

import { NavLink } from "../components/NavLink";
import { useRouter } from "next/router";

import { useState } from "react";
import { connect } from "react-redux";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../services/api";

function Cadastro(props) {
  const [tipo, setTipo] = useState("");

  const options = ["Professor", "Aluno"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: tipo,
    defaultValue: "Aluno",
    onChange: setTipo,
  });

  const group = getRootProps();

  const router = useRouter();

  type SignUpUser = {
    matricula: string;
    senha: string;
    email: string;
    nome: string;
    tipo: string;
  };

  const signUpUserFormSchema = yup.object().shape({
    matricula: yup.string().required("Matrícula obrigatória"),
    senha: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "No mínimo 6 caracteres"),
    email: yup
      .string()
      .required("Email obrigatório")
      .min(6, "No mínimo 6 caracteres"),
    nome: yup
      .string()
      .required("Nome obrigatório")
      .min(6, "No mínimo 6 caracteres"),
  });

  const signUpUser = useMutation(async (form: SignUpUser) => {
    const { dispatch } = props;
    let response;
    try {
      response = await api.post("/user", { ...form, tipo });
      const { data } = response;

      dispatch({
        type: "SIGN_IN_SUCCESS",
        payload: data,
      });
      alert("Cadastrado com sucesso, faça login!");
      router.push("/");
    } catch (error) {
      dispatch({
        type: "SIGN_UP_FAILURE",
        payload: error.message,
      });
      alert(error.message);
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signUpUserFormSchema),
  });

  const handleSignUpUser: SubmitHandler<SignUpUser> = async (values) => {
    await signUpUser.mutateAsync(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Cadastro | E-test</title>
      </Head>
      <Flex
        w="100%"
        maxWidth={520}
        bg="white.900"
        p="50"
        py="100"
        borderRadius={15}
        flexDirection="column"
      >
        <Box as="form" onSubmit={handleSubmit(handleSignUpUser)}>
          <Flex flexDirection="column" align="center" justify="center" mb="20">
            <Stack spacing="12">
              <Image src={logoImg} alt="E- Test" width={30} height={30} />

              <Text
                fontSize="3xl"
                color="black"
                align="center"
                justify="center"
                fontWeight="bold"
              >
                Cadastre-se
              </Text>

              <HStack {...group}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </Stack>
          </Flex>

          <Stack spacing="4" d="flex" align="center" justify="center">
            <Input
              name="nome"
              error={formState.errors.nome}
              {...register("nome")}
              type="text"
              placeholder="Nome"
            />

            <Input
              name="email"
              error={formState.errors.email}
              {...register("email")}
              type="text"
              placeholder="Email"
            />

            <Input
              name="matricula"
              error={formState.errors.matricula}
              {...register("matricula")}
              type="text"
              placeholder="Matricula"
            />
            <Input
              name="senha"
              error={formState.errors.senha}
              {...register("senha")}
              type="password"
              placeholder="Senha"
            />
          </Stack>

          <Stack spacing="5">
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

            <Flex justify="center" align="center" fontWeight="bold">
              <Flex justify="center" align="center" color="white">
                <Text color="black">Já tem conta?</Text>
                <Text fontWeight="bold" color="purple.800" ml="2">
                  <Link href="/">Faça login</Link>
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Cadastro);
