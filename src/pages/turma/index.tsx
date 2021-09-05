import { Avatar, Box, Button, Flex, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FiTrash } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { NavLink } from '../../components/NavLink';

export default function Turma({ turma }) {
  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />

      <Flex w="100%" my="6" justify="space-around" align="baseline" mt="2">
        <Flex mt="20" flexDir="column" maxWidth="30vw">

          <Flex flexDir="column" justify="center" align="flex-start">
            <Text fontSize="4xl">Novos:</Text>

            <Flex bg="red.500"
              w="65%"
              justify="center"
              align="flex-start"
              p="12"
              my="5"
              borderRadius="10"
            >
              <Box>
                <VStack mb="8">
                  <Text fontSize="3xl" fontWeight="bold">{turma.avaliacoes[0]}</Text>
                  <Text fontWeight="regular">Prazo: 21/09 ás 09:00</Text>
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
            <Flex bg="white" w="65%" justify="center" align="flex-start" p="12"
              my="5" color="black"
              borderRadius="10"
            >
              <Box>
                <VStack mb="8">
                  <Text fontSize="3xl" fontWeight="bold">{turma.avaliacoes[1]}</Text>
                  <Text fontWeight="regular">Prazo: 25/09 ás 09:00</Text>
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


          </Flex>

        </Flex>
        <Flex flexDir="column">
          <Flex flexDir="column">
            <Text fontSize="3xl">Turma: {turma.nome}</Text>
            <Text fontWeight="bold" fontSize="4xl">Prof: {turma.professor}</Text>
          </Flex>
          <VStack>

            {turma.comentarios.map(comentario => (
              <Box bg="white" p="8" borderRadius="10" w="50vw" >
                <Text color="black">
                  {comentario}
                </Text>
                <HStack justify="space-between" align="center" pt="8">
                  <Flex justify="center" align="center">
                    <Avatar size="sm" name={turma.professor} src="://.com/farciomernandes.png" />
                    <Text color="white.200" ml="3">{turma.professor}</Text>
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


export const getServerSideProps: GetServerSideProps = async () => {
  //Estado global para buscar e salvar as informações de uma turma
  return {
    props: {
      turma: {
        id: 1,
        nome: 'Javascript',
        avisos: [
          'Aula amanhã as 19:20',
          'Revisão hoje as 10:30'
        ],
        professor: 'Maurício de Souza',
        alunos: [
          'Marcio Fernandes',
          'Lucas Rangel',
          'Sabrina Nascimento'
        ],
        avaliacoes: [
          'Algotirmos e Lógica',
          'Interface do Futuro'
        ],
        comentarios: [
          'Estudem bastante ponteiros e estruturas para a prova de lógica!',
          `Olá eu gostaria de saber como criar um componente funcional dentro
          do React, se erxiste diferença na performance entre um componente de classes.`
        ]
      }
    }
  }
}