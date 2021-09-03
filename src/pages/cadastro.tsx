import { Button, Flex, Icon, Stack, Text, HStack } from '@chakra-ui/react';
import { useRadioGroup } from "@chakra-ui/radio"
import Link from "next/link";


import { Input } from '../components/Form/input';
import Image from 'next/image'
import { VscSignOut } from 'react-icons/vsc';

import logoImg from '../assets/images/logo.svg';
import RadioCard from '../components/RadioCard';

import { NavLink } from '../components/NavLink';


export default function Cadastro() {
    const options = ["Professor", "Aluno"]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
        onChange: console.log,
    })

    const group = getRootProps();

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
                            Cadastre-se
                        </Text>

                        <HStack {...group}>

                            {options.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </HStack>

                    </Stack>
                </Flex>

                <Stack spacing="4" d="flex" align="center" justify="center">

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
                        placeholder="Senha"
                    />
                </Stack>

                <Stack spacing="5">


                    <NavLink icon={VscSignOut} href="/dashboard"
                        color="white"
                        h="57" size="lg"
                        colorScheme="red"
                    >
                        Cadastrar
                    </NavLink>

                    <Flex justify="center" align="center" fontWeight="bold">

                        <Flex justify="center" align="center" color="white">
                            <Text color="black">Já tem conta?</Text>
                            <Text fontWeight="bold" color="purple.800" ml="2">
                                <Link href="/">Faça login</Link>
                            </Text>
                        </Flex>

                    </Flex>
                </Stack>

            </Flex>
        </Flex>
    )
}
