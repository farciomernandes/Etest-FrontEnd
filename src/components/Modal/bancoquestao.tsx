import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  HStack,
  Radio,
  Modal,
  ModalBody,
  RadioGroup,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

function BancoQuestaoModal({ questao }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify="center" align="center" flexDir="column" onClick={onOpen}>
        <HStack justify="baseline" align="center">
          <Button fontWeight="bold" colorScheme="green" size="lg">
            Ver questão
          </Button>
        </HStack>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="white"
          maxWidth={1200}
          mt="10vh"
          p="20"
          justify="center"
          align="center"
        >
          <VStack spacing="8">
            <ModalBody>
              <VStack>
                <Box justify="center" align="center" mb="8">
                  <VStack justify="baseline" align="center">
                    <Text fontWeight="bold" color="purple.800" fontSize="4xl">
                      {questao.assunto}
                    </Text>
                    <Text color="black">ID: #{questao.id}</Text>
                  </VStack>
                </Box>

                <Box
                  maxWidth="80%"
                  color="black"
                  justify="flex-start"
                  align="start"
                >
                  <Text color="black" my="5">
                    {questao.descricao}
                  </Text>

                  <RadioGroup colorScheme="purple" defaultValue="3">
                    <Stack spacing="8">
                      <Radio value="1" isDisabled>
                        {questao.alternativa1}
                      </Radio>
                      <Radio value="2" isDisabled>
                        {questao.alternativa2}
                      </Radio>
                      <Radio value="3">{questao.alternativa3}</Radio>
                      <Radio value="4" isDisabled>
                        {questao.alternativa4}
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
                justify="center"
                align="center"
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
