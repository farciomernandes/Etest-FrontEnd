import { Avatar, Flex, Text, VStack, HStack, Stack, Box } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import BancoQuestaoModal from '../../components/Modal/bancoquestao';
import { NavLink } from '../../components/NavLink';

export default function ListarBanco() {
    return (
        <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
            <Header />

            <Flex w="100%" justify="space-around" align="baseline" mt="20">
                <Flex flexDir="column">
                    <Flex flexDir="column" justify="center" align="center">
                        <Text fontSize="3xl">Banco de Questões</Text>
                    </Flex>
                    <VStack>

                        <Flex bg="white" p="8" borderRadius="10" maxWidth="90vw" minWidth="70vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack px="8">
                                    <Text
                                        fontWeight="bold"
                                        fontSize="2xl"
                                        color="purple.800"
                                    >
                                        Front-end e Javascript
                                    </Text>
                                    <HStack>

                                    <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Disciplina
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Unidade
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Assunto
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Dificuldade
                                        </Box>
                                
                                    </HStack>
                                </Stack>
                                <BancoQuestaoModal />
                            </Flex>
                        </Flex>

                        <Flex bg="white" p="8" borderRadius="10" maxWidth="90vw" minWidth="70vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack px="8">
                                    <Text
                                        fontWeight="bold"
                                        fontSize="2xl"
                                        color="purple.800"
                                    >
                                        Front-end e Javascript
                                    </Text>
                                    <HStack>

                                    <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Disciplina
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Unidade
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Assunto
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Dificuldade
                                        </Box>
                                
                                    </HStack>
                                </Stack>
                                <BancoQuestaoModal />
                            </Flex>
                        </Flex>

                        <Flex bg="white" p="8" borderRadius="10" maxWidth="90vw" minWidth="70vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack px="8">
                                    <Text
                                        fontWeight="bold"
                                        fontSize="2xl"
                                        color="purple.800"
                                    >
                                        Front-end e Javascript
                                    </Text>
                                    <HStack>

                                    <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Disciplina
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Unidade
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Assunto
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Dificuldade
                                        </Box>
                                
                                    </HStack>
                                </Stack>
                                <BancoQuestaoModal />
                            </Flex>
                        </Flex>

                        <Flex bg="white" p="8" borderRadius="10" maxWidth="90vw" minWidth="70vw" mt="8">
                            <Flex width="100%" d="flex" justify="space-between" align="center">
                                <Stack px="8">
                                    <Text
                                        fontWeight="bold"
                                        fontSize="2xl"
                                        color="purple.800"
                                    >
                                        Front-end e Javascript
                                    </Text>
                                    <HStack>

                                    <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Disciplina
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Unidade
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Assunto
                                        </Box>
                                
                                        <Box 
                                         p="1"
                                         rounded="md"
                                         w="100%"
                                         minW={110}
                                         bg="white" 
                                         color="red"
                                         border="1px" 
                                         align="center"
                                         borderColor="red"
                                         >
                                            Dificuldade
                                        </Box>
                                
                                    </HStack>
                                </Stack>
                                <BancoQuestaoModal />
                            </Flex>
                        </Flex>

                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    )
}
