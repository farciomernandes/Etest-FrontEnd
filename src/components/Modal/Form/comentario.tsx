import { Button, HStack,  Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { api } from "../../../services/api";

import { useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { useMutation } from 'react-query';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';




const AdicionarComentario = ({ turmaId, user }) => {

    type Comentario = {
        comentario: string;
    };
    
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [comentario, setComentario ] = useState('');

    const router = useRouter();

    const handleAdicionarComentario = useMutation(async(form: Comentario)=>{
        try {
            await api.post("/comentario", { texto: form.comentario, idTurma: turmaId },  { headers: {
                Authorization: `Bearer ${user.token}`
              }});
    
              router.push('/dashboard')
        } catch (error) {
            alert("Erro ao fazer comentário, tente novamente!");
            console.log(error);
        }
        
    })

    const comentarioFormSchema = yup.object().shape({
    comentario: yup.string().required('Comentário obrigatório').min(8, 'No mínimo 8 caracteres'),
    });


    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(comentarioFormSchema)
    })

    const handleComentario: SubmitHandler<Comentario> = async (values) => {
        await handleAdicionarComentario.mutateAsync(values)
    }


    return (
        <>
             <HStack cursor="pointer" mt="2" onClick={onOpen}>

              <Text color="green"  
              borderRadius={20}
              bg="white"
              fontSize="2xl"
              py="1"
              px="4"
              fontWeight="bold"
              >+</Text>  

            <Text fontSize="2xl">Adicionar um comentário</Text>
            </HStack>



            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg="white" maxWidth={720} mt="20vh"
                    p="20"
                    justify="center" 
                    align="center"
                >
                   <VStack spacing="8"
                   as="form"
                   onSubmit={handleSubmit(handleComentario)}
                   >
                   <ModalBody>
                        <VStack>
                            <Input
                                name="comentario"
                                type="text"
                                color="purple.800"
                                {...register("comentario")}
                                value={comentario}
                                onChange={(e)=> setComentario(e.target.value)}
                                placeholder="Adicione um comentário"
                                size="lg"
                                w={350}
                                error={formState.errors.name}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter justify="center" align="center">
                        <Button
                            colorScheme="green"
                            size="lg"
                            w={150}
                            type="submit"
                            justify="center" align="center"
                            >
                            Adicionar
                        </Button>
                    </ModalFooter>
                   </VStack>
                </ModalContent>

            </Modal>
        </>

    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
  })
  
export default connect(mapStateToProps)(AdicionarComentario);

