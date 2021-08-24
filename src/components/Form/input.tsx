import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel color="purple.800" htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="purple.800"
        variant="outline"
        _hover={{
            bgColor: "white.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
        color="black"
      />
      
      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)