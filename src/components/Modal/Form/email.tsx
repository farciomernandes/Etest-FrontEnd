import { Avatar, Box, Button, Divider, Flex, HStack, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { AiOutlineMail } from 'react-icons/ai';

const EditarEmail = (props) => {
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
                    <Icon as={AiOutlineMail} fontSize="25" />
                    <Button variant="unstyled" fontWeight="bold" fontSize="lg">Alterar email</Button>
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
                                    <Icon as={AiOutlineMail} fontSize="25" />
                                    <Text fontWeight="bold" fontSize="lg">Alterar Email</Text>

                                </HStack>
                            </Box>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Novo email"
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


export default  EditarEmail;

