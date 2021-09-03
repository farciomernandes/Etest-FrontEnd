import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Input } from '../../components/Form/input';
import Image from 'next/image'
import Link from 'next/link';

import logoImg from '../../assets/images/logo.svg';
import { NavLink } from '../../components/NavLink';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Flex as="form" w="100%" maxWidth={520}
        bg="white.900"
        p="50"
        py="100"
        borderRadius={15}
        flexDirection="column"
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
            name="matricula"
            type="text"
            placeholder="Matrícula"
          />
          <Input
            name="senha"
            type="password"
            placeholder="Senha"
          />
        </Stack>

        <Stack spacing="5" mt="8">
          <NavLink icon={null} href="/dashboard"
            color="white"
            h="47" size="lg"
            colorScheme="red"
          >
            Entrar
          </NavLink>
          <Flex justify="center" align="center" fontWeight="bold">
            <Flex justify="center" align="center" color="white">
              <Text color="black">Não tem conta?</Text>
              <Text fontWeight="bold" color="purple.800" ml="2">
                <Link href="/cadastro">Cadastre-se</Link>
              </Text>
            </Flex>
          </Flex>
        </Stack>

      </Flex>
    </Flex>
  )
}
