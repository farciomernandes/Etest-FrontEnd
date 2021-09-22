import { Flex, Text } from "@chakra-ui/react";


export default function Footer() {

    return (
        <Flex as="footer"
            position={["absolute", "fixed"]} bottom="-8"
            left={"25%"}
        >

            <Text>
                Copyright ©2021 All rights reserved  | This template is made with by Marcio Fernandes and Inathan Moreira
            </Text>
        </Flex>
    );
}