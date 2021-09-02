import { Avatar, Button, Divider, Flex, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from 'react-icons/ri';


import EditarNome from './Form/nome';
import EditarEmail from './Form/email';
import EditarSenha from './Form/senha';




const EditarModal: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    //const { user } = props;

    const user = {
        name: '',
        imageUrl: ''
    };


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
                        <Text fontSize="lg"> Marcio Fernandes</Text>
                    </VStack>
                    <VStack>

                        <ModalBody>
                            <VStack spacing="4">
                                <EditarNome />
                                <EditarEmail />
                                <EditarSenha />
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

