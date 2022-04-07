import { Avatar, Box, Button, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';

import { Header } from '../../../components/Header';
import { NavLink } from '../../../components/NavLink';
import Head from "next/head";

import { useRouter } from 'next/router';


function CorrigirAvaliacaoes() {

    const router = useRouter();

 

    return (
        <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
            <Header />
            <Head>
                <title>Correção | E-test</title>
            </Head>

            <Flex w="100%" justify="space-around" align="baseline" mt="20">
                <Flex flexDir="column">
                    <Flex flexDir="column" justify="center" align="center">
                        <Text fontSize="3xl">Turma: Programação Orientada a Objetos</Text>
                        <Text fontWeight="bold" fontSize="4xl">Prof: Marcone Tavares</Text>
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
                                        /> <Text ml="2" color="black">Marcio Fernandes Oliveira</Text>
                                    </Flex>
                                </Stack>
                                <NavLink icon={null} href="/professor/avaliacoes/correcao"
                                 color="white"
                                 size="md"
                                 colorScheme="red"
                                >
                                    Corrigir prova
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
                                        /> <Text ml="2" color="black">Marcio Fernandes Oliveira</Text>
                                    </Flex>
                                </Stack>
                                <NavLink icon={null} href="/professor/avaliacoes/correcao"
                                 color="white"
                                 size="md"
                                 colorScheme="green"
                                >
                                    Corrigida
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

export default CorrigirAvaliacaoes;