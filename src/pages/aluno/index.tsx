import { Box, Flex, Stack, Text, Button } from '@chakra-ui/react';
import Head from "next/head";

import { Input } from '../../components/Form/input';
import Image from 'next/image'
import Link from 'next/link';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';

import logoImg from '../../assets/images/logo.svg';
import { queryClient } from '../../services/queryCliente';
import { api } from '../../services/api';
import { useRouter } from 'next/dist/client/router';

export default function Login() {

  const router = useRouter();

  type LoginUser = {
    matricula: string;
    senha: string;
  };

  const loginAlunoFormSchema = yup.object().shape({
    matricula: yup.string().required('Matrícula obrigatória'),
    senha: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  });


  const loginUser = useMutation(async (form: LoginUser) => {
    if (form.matricula === '40028922' && form.senha === '123456') {
      const response = await api.post('/auth', form);
      localStorage.setItem("@Etest:user", JSON.stringify(response.data));
      router.push('/dashboard')
    } else {
      alert('Matricula ou senha incorreta')
    }

  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginAlunoFormSchema)
  })

  const handleLoginUser: SubmitHandler<LoginUser> = async (values) => {
    await loginUser.mutateAsync(values)

    //router.push('/dashboard')
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Head>
        <title>Login aluno | E-test</title>
      </Head>

      <Box as="form" w="100%" maxWidth={520}
        bg="white.900"
        p="50"
        py="100"
        borderRadius={15}
        flexDirection="column"
        onSubmit={handleSubmit(handleLoginUser)}
      >
        <Flex
          flexDirection="column"
          align="center"
          justify="center"
          mb="20"
        >
          <Stack spacing="12">
            <Image
              src={logoImg}
              alt="E- Test"
              width={30}
              height={30}
            />

            <Text
              fontSize="3xl"
              color="black"
              align="center"
              justify="center"
            >
              Entrar como aluno
            </Text>
          </Stack>
        </Flex>

        <Stack spacing="4">

          <Input
            type="text"
            placeholder="Matrícula"
            name="matricula"
            error={formState.errors.name}
            {...register("matricula")}
          />
          <Input
            name="senha"
            error={formState.errors.name}
            {...register("senha")} type="password"
            placeholder="Senha"
          />
        </Stack>

        <Stack spacing="5" mt="8">
          <Button icon={null} href="/aluno"
            color="white"
            h="47" size="lg"
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
  )
}
