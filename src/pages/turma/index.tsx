import { Avatar, Box, Button, Flex, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image'
import { FiTrash } from 'react-icons/fi';

import { Header } from '../../components/Header';

export default function Turma() {
  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />

      <Flex w="100%" my="6" justify="space-around"  align="baseline" mt="2">
        <Flex mt="20" flexDir="column" maxWidth="30vw">

        <Flex flexDir="column" justify="center" align="flex-start">
            <Text fontSize="4xl">Novos:</Text>

            <Flex bg="red.500" w="65%" justify="center" align="flex-start" p="12"
            my="5"
            borderRadius="10"
            >
            <Box>
            <VStack>
            <Text fontSize="3xl" fontWeight="bold">Prova de algoritmo</Text>
            <Text fontWeight="regular">Prazo: 21/09 ás 09:00</Text>
            </VStack>  
            <Button colorScheme="green"
            type="submit"size="lg" 
            mt="8"
            >Fazer prova</Button> 
            </Box>

            </Flex>
            

            <Flex bg="white" w="65%" justify="center" align="flex-start" p="12"
            my="5" color="black"
            borderRadius="10"
            >
            <Box>
            <VStack>
            <Text fontSize="3xl" fontWeight="bold">Prova de Javascript</Text>
            <Text fontWeight="regular">Prazo: 25/09 ás 09:00</Text>
            </VStack>  
            <Button colorScheme="green"
            type="submit"size="lg" 
            mt="8"
            >Definir lembrete</Button> 
            </Box>

            </Flex>
            

        </Flex>

        </Flex>
        <Flex flexDir="column">
        <Flex flexDir="column">
            <Text fontSize="3xl">Turma: Algorítmo</Text>
            <Text fontWeight="bold" fontSize="4xl">Prof: Marcone Tavares</Text>
        </Flex>
        <VStack>

            <Box bg="white" p="8" borderRadius="10"  maxWidth="61vw">
                <Text color="black">
                Olá eu gostaria de saber como criar um componente funcional dentro
                    do React, se erxiste diferença na performance entre um componente de classes.
                </Text>
                <HStack justify="space-between" align="center" pt="8">
                    <Flex justify="center" align="center">
                    <Avatar size="sm" name="Marcone Tavares" src="://.com/farciomernandes.png" />
                    <Text color="white.200" ml="3">Marcone Tavares</Text>
                    </Flex>
                   <Icon as={FiTrash} color="red" fontSize="20" />
                </HStack>
            </Box>
       
            
            <Box bg="white" p="8" borderRadius="10"  maxWidth="61vw">
                <Text color="black">
                Olá eu gostaria de saber como criar um componente funcional dentro
                    do React, se erxiste diferença na performance entre um componente de classes.
                </Text>
                <HStack justify="space-between" align="center" pt="8">
                    <Flex justify="center" align="center">
                    <Avatar size="sm" name="Marcone Tavares" src="://.com/farciomernandes.png" />
                    <Text color="white.200" ml="3">Marcone Tavares</Text>
                    </Flex>
                   <Icon as={FiTrash} color="red" fontSize="20" />
                </HStack>
            </Box>
       
            
            <Box bg="white" p="8" borderRadius="10"  maxWidth="61vw">
                <Text color="black">
                Olá eu gostaria de saber como criar um componente funcional dentro
                    do React, se erxiste diferença na performance entre um componente de classes.
                </Text>
                <HStack justify="space-between" align="center" pt="8">
                    <Flex justify="center" align="center">
                    <Avatar size="sm" name="Marcone Tavares" src="://.com/farciomernandes.png" />
                    <Text color="white.200" ml="3">Marcone Tavares</Text>
                    </Flex>
                   <Icon as={FiTrash} color="red" fontSize="20" />
                </HStack>
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
