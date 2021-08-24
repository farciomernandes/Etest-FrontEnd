import { Button, Flex, Stack, Text, Divider, Box, Icon } from '@chakra-ui/react';
import Image from 'next/image'

import logoImg from '../assets/images/logo2.svg';

import { VscSignOut } from 'react-icons/vsc';


export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
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

            <Button type="submit" h="57" size="lg" bg="white.900" color="purple.800"
              leftIcon={<Icon as={VscSignOut} fontSize="20" />}
            >
              Entrar como aluno
            </Button>

            <Button type="submit" h="57" size="lg" colorScheme="green"
              leftIcon={<Icon as={VscSignOut} fontSize="20" />}
            >Entrar como professor</Button>

            <Flex w="100%" justify="center" align="center">
              <Divider />
              <Text px="5">ou</Text>
              <Divider />

            </Flex>

            <Stack>
              <Button type="submit" h="57" size="lg" colorScheme="red"
                rightIcon={<Icon as={VscSignOut} fontSize="20" />}
              >Cadastre-se</Button>

              <Flex justify="center" align="center" color="white">
                <Text>Entre como</Text>
                <Text ml="2" fontWeight="bold">Desenvolvedor</Text>
              </Flex>
            </Stack>

          </Stack>
        </Flex>

      </Flex>
    </Flex>
  )
}
