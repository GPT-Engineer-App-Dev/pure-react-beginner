import { Container, Text, VStack, Box, Flex, Spacer, Heading, IconButton, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
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
          <Box as="form" onSubmit={handleSubmit} width={{ base: "100%", md: "400px" }} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">Login</Button>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;