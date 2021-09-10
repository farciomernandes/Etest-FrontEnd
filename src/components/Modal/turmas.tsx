import {
    Button, Divider, Flex, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent,
    ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack, Spinner
} from "@chakra-ui/react";
import { VscSignOut } from "react-icons/vsc";


import Link from 'next/link';
import { useQuery } from "react-query";
import { api } from "../../services/api";

type Turma = {
    id: number;
    nome: string;
    avisos: string;
    professor: string;
    alunos: string[];
    avaliacoes: string[];
}

export default function TurmasModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data, isLoading, error } = useQuery('turmas', async () => {
        const response = await api.get('/turmas');
        return response.data;
    });



    return (
        <>
            {isLoading ? (
                <Flex align="center">
                    <Spinner />
                </Flex>
            ) : error ? (
                <Flex align="center">
                    <Text>Falha ao carregar turmas</Text>
                </Flex>
            ) : (
                <Button w="100%" type="button"
                    h="57"
                    onClick={onOpen}
                    size="lg" bg="white.900"
                    color="purple.800"
                >
                    Minhas turmas
                </Button>
            )}


            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg="purple.500" maxWidth={720} mt="20vh"
                    p="20"
                >

                    <ModalHeader justify="center" align="center"
                        fontSize="3xl"
                    >Minhas turmas</ModalHeader>
                    <ModalCloseButton />
                    <VStack>

                        <ModalBody>
                            <VStack spacing="4">
                            {data.turmas.map((turma: Turma) => (
                                    <Flex
                                        justify="center" align="center"
                                        flexDir="column"
                                        key={turma.id}
                                    >
                                        <HStack justify="baseline" align="center">
                                            <Text
                                                bg="white"
                                                fontWeight="regular"
                                                color="purple.800"
                                                p="3"
                                                h="12"
                                                align="center"
                                                w="sm"
                                                borderRadius="8"
                                            >
                                                {turma.nome}
                                            </Text>
                                            <Button type="submit" size="lg" colorScheme="green" p="4">
                                                <Link href="/turma"><Icon color="white" as={VscSignOut} fontSize="20" /></Link>
                                            </Button>
                                        </HStack>
                                        <Divider mt="2" />
                                    </Flex>
                                ))}
                            </VStack>
                        </ModalBody>

                        <ModalFooter justify="center" align="center">
                            <Button
                                colorScheme="red"
                                size="lg"
                                w={150}
                                onClick={onClose}>
                                Fechar
                            </Button>
                        </ModalFooter>
                    </VStack>

                </ModalContent>
            </Modal>
        </>

    );
}