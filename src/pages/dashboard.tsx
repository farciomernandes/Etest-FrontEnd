import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image'

import dashboardImg from '../assets/images/dashboardIMG.svg';
import { Header } from '../components/Header';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" maxWidth={1480} mx="auto" px="6">
      <Header />

      <Flex w="100%" my="6" justify="space-around" align="center">
        <Flex>

        </Flex>
        <Flex>
          
        <Box
        position="absolute"
        >
          <Image src={dashboardImg} width={1200} height={1200} />
        </Box>

        </Flex>
      </Flex>

    </Flex>
  )
}
