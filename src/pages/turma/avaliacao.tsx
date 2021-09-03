import React, { useState } from 'react';
import { RadioGroup, Box, Button, Flex, Radio, Stack, Text, VStack } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import ReportarQuestao from '../../components/Modal/reportar';

export default function Turma() {
    const [resposta, setResposta] = useState("");

    return (
        <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
            <Header />


            <Flex w="100%" justify="center" align="center" mt="5">
                <Flex flexDir="column">
                    <Flex flexDir="column" align="center" mb="12">
                        <Text fontSize="lg">Professor Marcone Tavares</Text>
                        <Text fontWeight="bold" fontSize="2xl">Prova de Algorítmos</Text>
                    </Flex>
                    <VStack>
                        <Box bg="white" borderRadius="10"
                            maxWidth="50vw" justify="center" align="center"
                            pb="12"
                            pt="8"
                        >
                            <Box
                                bg="red.500" color="white" maxWidth="10%"
                                p="3" align="center" borderRadius="5"
                                position="relative"
                                bottom="12"
                                right="350"
                            >
                                1 de 15
                            </Box>
                            
                            <Box maxWidth="80%"
                                color="black" justify="flex-start"
                                align="start">
                                <Text fontWeight="bold" fontSize="2xl"

                                >
                                    Questão 1
                                </Text>

                                <Text color="black" my="5" >
                                    Marque a alternativa correta que responde a seguinte pergunta:
                                    Existe diferença na performance entre um componente de classes?
                                </Text>

                                <RadioGroup colorScheme="purple" onChange={setResposta} value={resposta}>
                                    <Stack spacing="8">
                                        <Radio value="1">
                                            Sim, a principal diferença está no babel que consegue
                                            converter de forma mais eficaz o javascript de um componente de classe no lugar
                                            de um componente funcional.
                                        </Radio>
                                        <Radio value="2">
                                            Não, pois o babel renderiza igualmente todos os componentes de função
                                            e classe.
                                        </Radio>
                                        <Radio value="3">
                                            Não, pois a única diferença em um componente funcional e de classe
                                            no react é o fato do desenvolvimento ser mais simples utilizando componentes funcionais.
                                        </Radio>
                                        <Radio value="4">
                                            Nenhuma das alternativas
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                            <Stack direction="row" spacing={4}
                                mt="5vh"
                                w="80%"
                                justify="space-between"
                            >
                                <ReportarQuestao />
                                <Button size="lg" colorScheme="green">
                                    Próxima questão
                                </Button>

                            </Stack>
                        </Box>

                    </VStack>


                </Flex>
            </Flex>

            <Flex as="footer"
                position="fixed" bottom="0"
                left="30%"
            >

                <Text>
                    Copyright ©2021 All rights reserved  | This template is made with by Marcio Fernandes and Henrique Benício
                </Text>
            </Flex>
        </Flex>
    )
}
