import { Container, Text, VStack, Box, Flex, Spacer, Heading, IconButton, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const AuthenticatedContent = () => {
  const { logout } = useSupabaseAuth();

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
          <Text fontSize="2xl">Authenticated Content</Text>
          <Text>This content is only visible to authenticated users.</Text>
          <Button onClick={logout} colorScheme="blue" width="full">Logout</Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default AuthenticatedContent;