import React, { useState } from "react";
import {
  RadioGroup,
  Box,
  Button,
  Flex,
  Radio,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import { Header } from "../../../components/Header";
import ReportarQuestao from "../../../components/Modal/reportar";

function Avaliacao() {
  const router = useRouter();
  const [avaliacao, setAvaliacao] = useState({
    questoes: [{
      descricao: '',
      alternativa1: '',
      alternativa2: '',
      alternativa3: '',
      alternativa4: '',
    }]
  });

  const [resposta, setResposta] = useState("");
  const [atual, setAtual] = useState(0);
  const [questoes, setQuestoes] = useState(avaliacao.questoes[atual]);

  function nextQuestion() {
    const nextQuestion = atual + 1;
    if (nextQuestion >= avaliacao.questoes.length) {
      alert("Prova finalizada. Aguarde a correção do professor!");
      router.push("/dashboard");
    } else {
      setAtual(nextQuestion);
      setQuestoes(avaliacao.questoes[atual]);
    }
  }

  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />

      <Flex w="100%" justify="center" align="center" mt="5">
        <Flex flexDir="column">
          <Flex flexDir="column" align="center" mb="12">
            <Text fontSize="lg">Professor Marcone Tavares</Text>
            <Text fontWeight="bold" fontSize="2xl">
              Prova de Algorítmos
            </Text>
          </Flex>
          <VStack>
            <Box
              bg="white"
              borderRadius="10"
              w="50vw"
              justify="center"
              align="center"
              pb="12"
              pt="8"
            >
              <Box
                bg="red.500"
                color="white"
                maxWidth="20%"
                p="3"
                align="center"
                borderRadius="5"
                position="relative"
                bottom="12"
                right="350"
              >
                {atual + 1} de {avaliacao.questoes.length}
              </Box>

              <Box
                maxWidth="80%"
                color="black"
                justify="flex-start"
                align="start"
              >
                <Text fontWeight="bold" fontSize="2xl">
                  Questão {atual + 1}
                </Text>

                <Text color="black" my="5">
                  {avaliacao.questoes[atual].descricao}
                </Text>

                <RadioGroup
                  colorScheme="purple"
                  onChange={setResposta}
                  value={resposta}
                >
                  <Stack spacing="8">
                    <Radio value="1">
                      {avaliacao.questoes[atual].alternativa1}
                    </Radio>
                    <Radio value="2">
                      {avaliacao.questoes[atual].alternativa2}
                    </Radio>
                    <Radio value="3">
                      {avaliacao.questoes[atual].alternativa3}
                    </Radio>
                    <Radio value="4">
                      {" "}
                      {avaliacao.questoes[atual].alternativa4}
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>

              <Stack
                direction="row"
                spacing={4}
                mt="5vh"
                w="80%"
                justify="space-between"
              >
                <ReportarQuestao />
                <Button size="lg" colorScheme="green" onClick={nextQuestion}>
                  Próxima questão
                </Button>
              </Stack>
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Avaliacao;
