import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";

function Boletim() {
  const router = useRouter();

  return (
    <Flex w="100vw" align="center" justify="center" direction="column">
      <Head>
        <title>Boletim | E-test</title>
      </Head>
      <Header />

      <Flex
        w="100%"
        justify="center"
        align="flex-start"
        px="57"
        mb="12"
        flexDirection="column"
        mt="12"
      >
        <Box
          w="100%"
          bg="white"
          p="8"
          borderRadius="12"
          justify="center"
          align="flex-start"
        >
          <Box mb="8">
            <Text color="black" fontSize="2xl">
              Aluno:
            </Text>
            <Text color="black" fontSize="3xl">
              Marcio Fernandes dos Santos
            </Text>
          </Box>

          <Table
            colorScheme="purple"
            bg="white"
            color="black"
            borderRadius="8"
            justify="center"
            align="flex-start"
          >
            <Thead>
              <Tr>
                <Th>Turma</Th>
                <Th>Professor</Th>
                <Th isNumeric>Nota 1</Th>
                <Th isNumeric>Nota 2</Th>
                <Th isNumeric>Nota 3</Th>
                <Th isNumeric>Nota 4</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Algorítmos</Td>
                <Td fontWeight="bold">Marcone Tavares</Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  8.5
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  10.00
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  5.0
                </Td>
                <Td fontWeight="bold" color="purple.800" isNumeric>
                  4.3
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex mt="12" justify="center" align="center">
            <Button type="submit" h="57" size="lg" colorScheme="red">
              Exportar em Excel
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Boletim;
