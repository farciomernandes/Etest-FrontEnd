import { Box, Button, Divider, Flex, HStack, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { BiUser } from 'react-icons/bi';

const ReportarQuestao: React.FC = () => {
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
                    fontWeight="bold" colorScheme="red" 
                    size="lg">Reportar questão</Button>
                </HStack>
                <Divider mt="2" />
            </Flex>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg="white" maxWidth={720} mt="20vh"
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
                                    <Text fontWeight="bold" color="purple.800" fontSize="4xl">Reportar questão </Text>

                                </HStack>
                            </Box>
                            <Input 
                            variant="flushed" 
                            placeholder="Por que você quer reportar essa questão?"
                            color="purple.800"
                            borderBottom="2px" 
                            focusBorderColor="purple.800"
                            borderColor="purple.800"
                            minW="450"
                            _hover={{
                                borderColor: "purple.800",
                                borderBottom:"2px", 
                                focusBorderColor:"purple.800"
                            }}
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
                            Reportar
                        </Button>
                    </ModalFooter>
                   </VStack>
                </ModalContent>

            </Modal>
        </>

    );
}


export default  ReportarQuestao;

