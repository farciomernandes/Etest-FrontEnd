import { Box, Flex, Stack, Text, Button, useToast } from "@chakra-ui/react";
import Head from "next/head";

import { Input } from "../../components/Form/input";
import Image from "next/image";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";

import logoImg from "../../assets/images/logo.svg";

import { useRouter } from "next/dist/client/router";
import { LoginUser } from "../../types";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

function Login() {
  const toast = useToast();
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const loginProfessorFormSchema = yup.object().shape({
    matricula: yup.string().required("Matrícula obrigatória"),
    senha: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "No mínimo 6 caracteres"),
  });

  const loginUser = useMutation(async (form: LoginUser) => {
    try {
      await signIn(form);
    } catch (error) {
      console.log('erro')
      toast({
        title: "Erro fazer login!",
        status: "error",
        isClosable: true,
        position: 'top-right'
      })    
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginProfessorFormSchema),
  });

  const handleLoginUser: SubmitHandler<LoginUser> = async (values) => {
    await loginUser.mutateAsync(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Login Professor | E-Test</title>
      </Head>

      <Box
        as="form"
        w="100%"
        maxWidth={520}
        bg="white.900"
        p="50"
        py="100"
        borderRadius={15}
        flexDirection="column"
        onSubmit={handleSubmit(handleLoginUser)}
      >
        <Flex flexDirection="column" align="center" justify="center" mb="20">
          <Stack spacing="12">
            <Image src={logoImg} alt="E- Test" width={30} height={30} />

            <Text fontSize="3xl" color="black" align="center" justify="center">
              Entrar como Professor
            </Text>
          </Stack>
        </Flex>

        <Stack spacing="4">
          <Input
            type="text"
            placeholder="Matrícula"
            name="matricula"
            error={formState.errors.matricula}
            {...register("matricula")}
          />
          <Input
            name="senha"
            error={formState.errors.senha}
            {...register("senha")}
            type="password"
            placeholder="Senha"
          />
        </Stack>

        <Stack spacing="5" mt="8">
          <Button
            icon={null}
            href="/professor"
            color="white"
            h="47"
            size="lg"
            colorScheme="red"
            type="submit"
          >
            Entrar
          </Button>
          <Flex justify="center" align="center" fontWeight="bold">
            <Flex justify="center" align="center" color="white">
              <Text color="black">Não tem conta?</Text>
              <Text fontWeight="bold" color="purple.800" ml="2">
                <Link href="/cadastro">Cadastre-se</Link>
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}


export default Login;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["authToken.etest"]: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
