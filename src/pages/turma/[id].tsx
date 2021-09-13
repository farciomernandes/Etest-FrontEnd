import { Avatar, Box, Button, Flex, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from "next/head";

import { FiTrash } from 'react-icons/fi';

import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

import { Header } from '../../components/Header';
import { NavLink } from '../../components/NavLink';
import { api } from '../../services/api';

function Turma({ turma }) {
  console.log('CHEGOU AQUI: ', turma);

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Head>
        <title>Turma | E-test</title>
      </Head>
      <Header />
      

      <Flex w="100%" my="6" justify="space-around" align="baseline" mt="2">
        <Flex mt="20" flexDir="column" maxWidth="30vw">

          <Flex flexDir="column" justify="center" align="flex-start">
            <Text fontSize="4xl">Novos:</Text>

          {turma.avaliacoes.map(avaliacao=>
          {
              return (
                <Flex bg="red.500" key={avaliacao.id}
                w="65%"
                justify="center"
                align="flex-start"
                p="12"
                my="5"
                borderRadius="10"
                >
                <Box>
                  <VStack mb="8">
                    <Text fontSize="3xl" fontWeight="bold">{avaliacao.nome}</Text>
                    <Text fontWeight="regular">Prazo: {avaliacao.dataProva}</Text>
                  </VStack>
                  <NavLink icon={null} href="/turma/avaliacao"
                    bg="#38A169" color="white" type="submit"
                    colorScheme="green"
                    size="lg"
                  >
                    Fazer prova
                  </NavLink>
                </Box>
              </Flex>
              )
          }
          )}

          {/**FUNDO BRANCO
           * 
           *    <Flex bg="white" w="65%" justify="center" align="flex-start" p="12"
            my="5" color="black"
            borderRadius="10"
          >
            <Box>
              <VStack mb="8">
                <Text fontSize="3xl" fontWeight="bold">{avaliacao.nome}</Text>
                <Text fontWeight="regular">Prazo:{avaliacao.dataProva}</Text>
              </VStack>
              <NavLink icon={null} href="/turma/avaliacao"
                bg="#38A169" color="white" type="submit"
                colorScheme="green"
                size="lg"
              >
                Definir lembrete
              </NavLink>
            </Box>

          </Flex>
           */}
           
           
           
          </Flex>

        </Flex>
        <Flex flexDir="column">
          <Flex flexDir="column">
            <Text fontSize="3xl">Turma: {turma.nome}</Text>
            <Text fontWeight="bold" fontSize="4xl">Prof: {turma.nomeProfessor}</Text>
          </Flex>

          <VStack>

            {turma.comentarios.map(comentario => (
              <Box bg="white" p="8" borderRadius="10" w="50vw" key={comentario.id} >
                <Text color="black">
                  {comentario.texto}
                </Text>
                <HStack justify="space-between" align="center" pt="8">
                  <Flex justify="center" align="center">
                    <Avatar size="sm" name={turma.nomeProfessor} src="://.com/farciomernandes.png" />
                    <Text color="white.200" ml="3">{turma.nomeProfessor}</Text>
                  </Flex>
                  <Icon as={FiTrash} color="red" fontSize="20" />
                </HStack>
              </Box>
            ))}

          </VStack>

        </Flex>
      </Flex>
    </Flex>
  )
}

const mapStateToProps = (state) => ({
  turma: state.turma.turma,
})


export default connect(mapStateToProps)(Turma);