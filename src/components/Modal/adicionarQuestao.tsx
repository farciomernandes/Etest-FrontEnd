import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { connect } from "react-redux";
import { NavLink } from "../NavLink";

const AdicionarQuestao = ({ user, dispatch }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const { query } = useRouter();

  type adicionarQuestao = {
    idQuestao: string;
  };

  const adicionarQuestaoFormSchema = yup.object().shape({
    idQuestao: yup.string().required("id da questão obrigatório"),
  });

  const handleCriar = useMutation(async (form: adicionarQuestao) => {
    try {
      const id = router.query.id;
      await api.post(
        `/avaliacao/adicionar`,
        { idQuestao: form.idQuestao, idAvaliacao: id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Adicionada com Sucesso!");

      const response = await api.get(`/avaliacao/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({
        type: "AVALIACAO_SUCCESS",
        payload: response.data,
      });

      router.push(`/turma/avaliacao/editar/${query.id}`);
    } catch (error) {
      alert("Erro ao adicionar, tente novamente!");
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(adicionarQuestaoFormSchema),
  });

  const handleadicionarQuestao: SubmitHandler<adicionarQuestao> = async (
    values
  ) => {
    await handleCriar.mutateAsync(values);
  };

  return (
    <>
      <Flex onClick={onOpen}>
        <HStack justify="baseline" align="center">
          <NavLink
            w="100%"
            type="button"
            icon={null}
            href={`/turma/avaliacao/editar/${query.id}`}
            h="57"
            size="lg"
            bg="white.900"
            color="purple.800"
          >
            Adicionar nova questão
          </NavLink>
        </HStack>
        <Divider />
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="white"
          maxWidth={720}
          mt="20vh"
          p="20"
          justify="center"
          align="center"
        >
          <VStack
            spacing="8"
            as="form"
            onSubmit={handleSubmit(handleadicionarQuestao)}
          >
            <ModalBody>
              <Flex align="center" justify="center" direction="column">
                <Box>
                  <Flex
                    flexDirection="column"
                    align="center"
                    justify="center"
                    mb="20"
                  >
                    <Stack spacing="8">
                      <Text
                        fontSize="3xl"
                        color="purple.800"
                        align="center"
                        justify="center"
                        fontWeight="bold"
                      >
                        Adicionar Questão
                      </Text>
                    </Stack>
                  </Flex>

                  <Stack spacing="12" d="flex" align="center" justify="center">
                    <Input
                      name="idQuestao"
                      error={formState.errors.idQuestao}
                      {...register("idQuestao")}
                      type="text"
                      placeholder="Digite o Id da questão"
                      color="purple.800"
                    />
                  </Stack>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter justify="center" align="center">
              <Button
                colorScheme="red"
                size="lg"
                w={150}
                type="submit"
                justify="center"
                align="center"
              >
                Adicionar
              </Button>
            </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(AdicionarQuestao);
