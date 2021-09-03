import { Box, Button, Divider, Flex, Stack, HStack, Radio, Modal, ModalBody, RadioGroup, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";

const BancoQuestaoModal: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            <Flex
                justify="center" align="center"
                flexDir="column"
                onClick={onOpen}
            >
                <HStack justify="baseline" align="center"
                >
                    <Button 
                    fontWeight="bold" colorScheme="green" 
                    size="lg">Ver questão</Button>
                </HStack>
            </Flex>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg="white" maxWidth={1200} mt="10vh"
                    p="20"
                    justify="center" 
                    align="center"
                >
                   <VStack spacing="8">
                   <ModalBody>
                        <VStack>
                            <Box
                                justify="center"
                                align="center" mb="8"
                            >
                    
                                <HStack justify="baseline" align="center">
                                    <Text fontWeight="bold" color="purple.800" fontSize="4xl">Front-end e Javascript</Text>

                                </HStack>
                            </Box>
                           
                            <Box maxWidth="80%"
                                color="black" justify="flex-start"
                                align="start">

                                <Text color="black" my="5" >
                                    Marque a alternativa correta que responde a seguinte pergunta:
                                    Existe diferença na performance entre um componente de classes?
                                </Text>

                                <RadioGroup colorScheme="purple" defaultValue="3">
                                    <Stack spacing="8">
                                        <Radio value="1" isDisabled>
                                            Sim, a principal diferença está no babel que consegue
                                            converter de forma mais eficaz o javascript de um componente de classe no lugar
                                            de um componente funcional.
                                        </Radio>
                                        <Radio value="2" isDisabled>
                                            Não, pois o babel renderiza igualmente todos os componentes de função
                                            e classe.
                                        </Radio>
                                        <Radio value="3">
                                            Não, pois a única diferença em um componente funcional e de classe
                                            no react é o fato do desenvolvimento ser mais simples utilizando componentes funcionais.
                                        </Radio>
                                        <Radio value="4" isDisabled>
                                            Nenhuma das alternativas
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>


                        </VStack>
                    </ModalBody>
                    <ModalFooter justify="center" align="center">
                        <Button
                            colorScheme="green"
                            size="lg"
                            onClick={onClose}
                            justify="center" align="center"
                            >
                            Adicionar questão a uma prova
                        </Button>
                    </ModalFooter>
                   </VStack>
                </ModalContent>

            </Modal>
        </>

    );
}


export default BancoQuestaoModal;

