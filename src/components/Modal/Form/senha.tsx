import { Avatar, Box, Button, Divider, Flex, HStack, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { RiLockPasswordLine } from 'react-icons/ri';

const EditarSenha = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { user } = props;

    return (
        <>
            <Flex
                justify="center" align="center"
                flexDir="column"
                onClick={onOpen}
            >
                <HStack justify="baseline" align="center"
                >
                    <Icon as={RiLockPasswordLine} fontSize="25" />
                    <Button variant="unstyled" fontWeight="bold" fontSize="lg">Alterar senha</Button>
                </HStack>
                <Divider mt="2" />
            </Flex>



            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg="purple.500" maxWidth={720} mt="20vh"
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
                                <Avatar size="2xl" name="Marcio Fernandes" mb="5"
                                    src="https://github.com/farciomernandes.png" />

                                <HStack justify="baseline" align="center">
                                    <Icon as={RiLockPasswordLine} fontSize="25" />
                                    <Text fontWeight="bold" fontSize="lg">Alterar Senha</Text>

                                </HStack>
                            </Box>
                            <Input
                                name="senha"
                                type="text"
                                placeholder="Novo senha"
                                size="lg"
                                w={350}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter justify="center" align="center">
                        <Button
                            colorScheme="red"
                            size="lg"
                            w={150}
                            onClick={onClose}
                            justify="center" align="center"
                            >
                            Alterar
                        </Button>
                    </ModalFooter>
                   </VStack>
                </ModalContent>

            </Modal>
        </>

    );
}


export default  EditarSenha;

