import { Avatar, Flex, Text, VStack, Stack } from '@chakra-ui/react';

import { Header } from '../../../components/Header';
import { NavLink } from '../../../components/NavLink';

import Head from "next/head";


export default function ListarAvaliacaoes() {
    return (
        <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
            <Header />
            <Head>
                <title>Enviadas | E-test</title>
            </Head>

            <Flex w="100%" justify="space-around" align="baseline" mt="20">
                <Flex flexDir="column">
                    <Flex flexDir="column" justify="center" align="center">
                        <Text fontSize="3xl">Provas enviadas</Text>
                    </Flex>
                    <VStack>

                        <Flex bg="white" p="8" borderRadius="10" maxWidth="61vw" minWidth="50vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack>
                                <Text 
                                    fontWeight="bold" 
                                    fontSize="2xl" 
                                    color="purple.800"
                                    >
                                        Prova realizada
                                    </Text>
                                    <Flex d="flex" justify="center" align="center">
                                        <Avatar size="sm" name="Marcio Fernandes"
                                            src="https://dasd.com/farciomernandes.png"
                                        /> 
                                        <Text ml="2" color="black">Turma: Algoritmo</Text>
                                        <Text ml="8" color="purple.800">Enviada dia 03/08/2021</Text>
                                    </Flex>
                                </Stack>
                                <NavLink icon={null} href="/professor/avaliacoes/lista"
                                 color="white"
                                 size="lg"
                                 colorScheme="green"
                                >
                                    Ver prova
                                </NavLink>
                            </Flex>
                            <Flex>

                            </Flex>
                        </Flex>
                    
                        <Flex bg="white" p="8" borderRadius="10" maxWidth="61vw" minWidth="50vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack>
                                <Text 
                                    fontWeight="bold" 
                                    fontSize="2xl" 
                                    color="purple.800"
                                    >
                                        Prova realizada
                                    </Text>
                                    <Flex d="flex" justify="center" align="center">
                                        <Avatar size="sm" name="Marcio Fernandes"
                                            src="https://dasd.com/farciomernandes.png"
                                        /> 
                                        <Text ml="2" color="black">Turma: Algoritmo</Text>
                                        <Text ml="8" color="purple.800">Enviada dia 03/08/2021</Text>
                                    </Flex>
                                </Stack>
                                <NavLink icon={null} href="/professor/avaliacoes/lista"
                                 color="white"
                                 size="lg"
                                 colorScheme="green"
                                >
                                    Ver prova
                                </NavLink>
                            </Flex>
                            <Flex>

                            </Flex>
                        </Flex>
                    
                        <Flex bg="white" p="8" borderRadius="10" maxWidth="61vw" minWidth="50vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack>
                                <Text 
                                    fontWeight="bold" 
                                    fontSize="2xl" 
                                    color="purple.800"
                                    >
                                        Prova realizada
                                    </Text>
                                    <Flex d="flex" justify="center" align="center">
                                        <Avatar size="sm" name="Marcio Fernandes"
                                            src="https://dasd.com/farciomernandes.png"
                                        /> 
                                        <Text ml="2" color="black">Turma: Algoritmo</Text>
                                        <Text ml="8" color="purple.800">Enviada dia 03/08/2021</Text>
                                    </Flex>
                                </Stack>
                                <NavLink icon={null} href="/professor/avaliacoes/lista"
                                 color="white"
                                 size="lg"
                                 colorScheme="green"
                                >
                                    Ver prova
                                </NavLink>
                            </Flex>
                            <Flex>

                            </Flex>
                        </Flex>
                    
                        <Flex bg="white" p="8" borderRadius="10" maxWidth="61vw" minWidth="50vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack>
                                <Text 
                                    fontWeight="bold" 
                                    fontSize="2xl" 
                                    color="purple.800"
                                    >
                                        Prova realizada
                                    </Text>
                                    <Flex d="flex" justify="center" align="center">
                                        <Avatar size="sm" name="Marcio Fernandes"
                                            src="https://dasd.com/farciomernandes.png"
                                        /> 
                                        <Text ml="2" color="black">Turma: Algoritmo</Text>
                                        <Text ml="8" color="purple.800">Enviada dia 03/08/2021</Text>
                                    </Flex>
                                </Stack>
                                <NavLink icon={null} href="/professor/avaliacoes/lista"
                                 color="white"
                                 size="lg"
                                 colorScheme="green"
                                >
                                    Ver prova
                                </NavLink>
                            </Flex>
                            <Flex>

                            </Flex>
                        </Flex>
                    
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    )
}
