import {  Flex, Stack, Text, Divider, Box } from '@chakra-ui/react';
import Link from "next/link";
import Head from "next/head";


import Image from 'next/image'

import logoImg from '../assets/images/logo2.svg';

import { VscSignOut } from 'react-icons/vsc';
import { NavLink } from '../components/NavLink';


export default function Home() {
  return (

    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Head>
                <title>Home | E-test</title>
            </Head>
      <Flex w="100%"
        align="center"
        justify="space-around"
        px="60"
        mb="12"
      >
        <Flex
          flexDirection="column"
          justify="center"
        >
          <Stack spacing="-10" maxWidth={720}>

            <Text
              fontSize="8xl"
            >
              E-test
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              py="5"
            >
              Aplicação Web para Auxílio na Realização de Atividades Avaliativas em Cursos EaD
            </Text>
          </Stack>
          <Text maxWidth={720}>
            O E-test é uma ferramenta desenvolvida com o intuito de melhorar o processo de ensino-aprendizagem.
            Usada principalmente por professores, seu objetivo é facilitar o desenvolvimento e aplicação de atividades avaliativas,
            contando com um banco de questões, mural, turmas personalizadas e suporte para exportação dos dados em csv. Tudo isso
            para facilitar a vida do professor e aluno.
          </Text>

        </Flex>


        <Flex
          flexDirection="column"
          justify="center"
        >
          <Stack spacing="5" w="20vw">
            <Box w="100%" justify="center" align="center">
              <Image src={logoImg}
                width={120}
                height={120}
              />
            </Box>

            <NavLink icon={VscSignOut} href="/aluno"
              bg="white.900" color="purple.800"
              h="57" size="lg" >
              Entrar como aluno
            </NavLink>

            <NavLink icon={VscSignOut} href="/professor"
              color="white"
              h="57" size="lg"
              colorScheme="green"
            >
              Entrar como professor
            </NavLink>

            <Flex w="100%" justify="center" align="center">
              <Divider />
              <Text px="5">ou</Text>
              <Divider />

            </Flex>

            <Stack>
              <NavLink icon={VscSignOut} href="/cadastro"
                color="white"
                h="57" size="lg"
                colorScheme="red"
              >
                Cadastre-se
              </NavLink>

              <Flex justify="center" align="center" color="white">
                <Text mr="2">Entre como</Text>
                <Text fontWeight="bold">
                  <Link href="cadastro">Desenvolvedor</Link>
                </Text>
              </Flex>
            </Stack>

          </Stack>
        </Flex>

      </Flex>
    </Flex>

  )
}
