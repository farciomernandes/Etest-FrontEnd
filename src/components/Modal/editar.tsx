import { Avatar, Button, Divider, Flex, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { HiOutlinePencilAlt, HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from 'react-icons/ri';




export default function EditarModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button w={350} 
            type="submit" 
            h="57"
            onClick={onOpen}
            size="lg" 
            colorScheme="red"
              >Editar perfil</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg="purple.500" maxWidth={720} mt="20vh" 
                    p="20"
                >

                <VStack justify="center" align="center"
                mb="8"
                spacing="6"
                >
                    <Avatar size="lg" name="Marcio Fernandes" src="://github.com/farciomernandes.png" />
                    <Text fontSize="lg">Marcio Fernandes</Text>
                </VStack>
                    <VStack>

                        <ModalBody>
                            <VStack spacing="4">

                                <Flex
                                    justify="center" align="center"
                                    flexDir="column"
                                >
                                    <HStack justify="baseline" align="center">
                                        <Icon as={HiOutlinePencilAlt} fontSize="25" /> 
                                        <Text fontWeight="bold" fontSize="lg">Alterar nome</Text>
                                    </HStack>
                                    <Divider mt="2" />
                                </Flex>

                                <Flex
                                    justify="center" align="center"
                                    flexDir="column"
                                >
                                    <HStack justify="baseline" align="center">
                                        <Icon as={HiOutlineMail} fontSize="25" />
                                        <Text fontWeight="bold" fontSize="lg">Alterar e-mail</Text>
                                    </HStack>
                                    <Divider mt="2" />
                                </Flex>

                                <Flex
                                    justify="center" align="center"
                                    flexDir="column"
                                >
                                    <HStack justify="baseline" align="center">
                                            <Icon as={RiLockPasswordLine} fontSize="25" />
                                            <Text fontWeight="bold" fontSize="lg">Alterar senha</Text>
                                    </HStack>
                                    <Divider mt="2" />
                                </Flex>

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