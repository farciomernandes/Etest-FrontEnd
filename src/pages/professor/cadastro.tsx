import { Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { Input } from '../../components/Form/input';
import Image from 'next/image'
import { VscSignOut } from 'react-icons/vsc';

import logoImg from '../../assets/images/logo.svg';

export default function Cadastro() {
    return (
        <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center">
            <Flex as="form" w="100%" maxWidth={520}
                bg="white.900"
                p="50"
                py="100"
                borderRadius={15}
                flexDirection="column"
            >
                <Flex
                    flexDirection="column"
                    align="center"
                    justify="center"
                    mb="20"
                >
                    <Stack spacing="12">
                        <Image
                            src={logoImg}
                            alt="E- Test"
                            width={30}
                            height={30}
                        />

                        <Text
                            fontSize="3xl"
                            color="black"
                            align="center"
                            justify="center"
                            fontWeight="bold"
                        >
                            Cadastre-se como professor
                        </Text>
                    </Stack>
                </Flex>

                <Stack spacing="4">

                    <Input
                        name="nome"
                        type="text"
                        placeholder="Nome"
                    />

                    <Input
                        name="matricula"
                        type="text"
                        placeholder="Matrícula"
                        
                    />
                    <Input
                        name="senha"
                        type="password"
                        size="lg"
                        placeholder="Senha"
                    />
                </Stack>

                <Stack spacing="5">
                    <Button type="submit" mt="6" size="lg" colorScheme="red"
                        rightIcon={<Icon as={VscSignOut} fontSize="20" />}

                    >Cadastrar</Button>

                    <Flex justify="center" align="center" fontWeight="bold">
                        <Text color="black">Não tem conta?</Text>
                        <Text color="purple.800" ml="2">Cadastre-se</Text>
                    </Flex>
                </Stack>

            </Flex>
        </Flex>
    )
}
