import { Container, Text, VStack, Box, Flex, Spacer, Heading, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <IconButton
          aria-label="Menu"
          icon={<FaBars />}
          size="lg"
          variant="outline"
          display={{ base: "block", md: "none" }}
        />
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="calc(100vh - 64px)"
        p={4}
      >
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;