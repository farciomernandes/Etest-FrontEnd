import { Avatar, Flex, HStack, Text } from "@chakra-ui/react";
import logoImg from "../assets/images/logo2.svg";
import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="12"
      px="6"
      align="center"
    >
      <Flex w="100%" justify="space-between" align="center">
        <Flex cursor="pointer">
          <ActiveLink href="/dashboard" passHref>
            <Image src={logoImg} alt="E- test" />
          </ActiveLink>
        </Flex>
        <HStack spacing="8" fontWeight="bold" ml="auto">
          <ActiveLink href={`/turma/avaliacao`} passHref>
            <Text cursor="pointer">Avaliações</Text>
          </ActiveLink>
          <ActiveLink href={"/aluno/boletim"} passHref>
            <Text cursor="pointer">Boletim</Text>
          </ActiveLink>
          <ActiveLink href="/banco" passHref>
            <Text cursor="pointer">Banco de Questões</Text>
          </ActiveLink>
            <Text onClick={()=> signOut()} cursor="pointer">Sair</Text>
          <Avatar
            size="lg"
            name="Marcio Fernandes"
            src="https://github.com/farciomernandes.png"
          />
        </HStack>
      </Flex>
    </Flex>
  );
}
