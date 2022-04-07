import { Avatar, Button, Divider, Flex, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from 'react-icons/ri';

import EditarNome from './Form/nome';
import EditarEmail from './Form/email';
import EditarSenha from './Form/senha';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const EditarModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { user } = useContext(AuthContext);

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
                        <Avatar size="lg" name='Marcio Fernandes' src='' />
                        <Text fontSize="lg">{user.nome}</Text>
                    </VStack>
                    <VStack>

                        <ModalBody>
                            <VStack spacing="4">
                                <EditarNome user={user} />
                                <EditarEmail user={user} />
                                <EditarSenha user={user} />
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



export default EditarModal;

