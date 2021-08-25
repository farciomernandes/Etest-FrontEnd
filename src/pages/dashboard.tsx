import { Box, Button, Divider, Flex, HStack, Icon, localStorageManager, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Image from 'next/image'

import dashboardImg from '../assets/images/dashboardIMG.svg';
import { Header } from '../components/Header';
import TurmasModal from '../components/Modal/turmas';
import EditarModal from '../components/Modal/editar';

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />

      <Flex w="100%" my="6" justify="space-around" align="center">
        <Flex mr="auto" mt="20" flexDir="column" maxWidth={720}>
          <Text
            fontSize="7xl"
          >
            Bem vindo ao E-test,
            <Text fontWeight="bold"> Marcio</Text>
          </Text>

          <Text mt="5" fontWeight="regular">
            Entre nas suas turmas e veja todos os comentários feitos
            pelos professores, confira já suas notas através do boletim,
            veja suas avaliações respondidas
          </Text>

          <Text mt="5" fontWeight="bold">
            Esse daksdasdnassdpoas dNEGRITO
          </Text>


          <Flex
            align="center"
            justify="space-between"
            mt="12"
          >

            <VStack spacing="8">
              <TurmasModal />

              <Button w={350} type="submit" h="57" size="lg" bg="white.900" color="purple.800"
              >Minhas avaliações</Button>
            </VStack>


            <VStack spacing="8">
              <Button w={350} type="submit" h="57" size="lg" colorScheme="green"
              >
                Meu Boletim
              </Button>

              <EditarModal />
            </VStack>

          </Flex>

        </Flex>
        <Flex>
          <Box
            position="absolute"
            right="0"
            top="20"
          >
            <Image src={dashboardImg} width={900} height={900} />
          </Box>

        </Flex>
      </Flex>
    </Flex>
  )
}
