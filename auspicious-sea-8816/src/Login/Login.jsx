import { Box, Text, Container, Heading, Image } from "@chakra-ui/react";
import Footer from "../Organisms/Footer";
import LoginFb from "./LoginCredentials";

export default function Login() {
  return (
    <Box
      w="full"
      bg=" #fff7f7"
    >
      <Box justifyContent="center" display="flex" py="20px">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/768px-Indeed_logo.svg.png?20210916154409"
          w="100px"
        />
      </Box>
      <Container
        border="1px solid gray"
        borderRadius="9px"
        justifyContent="center"
        w={{ base: "95%", md: "36%" }}
        p="6"
        bg="white"
      >
        <Box>
          <Heading size="md" mb="2">
            Ready to take the next step?
          </Heading>
          <Text>Create an account or sign in.</Text>
          <br />
          <Text fontSize="13px" color="gray">
            By creating an account or logging in, you understand and agree to
            Indeed's{" "}
            <Text as="ins" color="blue">
              Terms
            </Text>{" "}
            . You also acknowledge our{" "}
            <Text as="ins" color="blue">
              Cookie
            </Text>{" "}
            and{" "}
            <Text as="ins" color="blue">
              Privacy
            </Text>{" "}
            policies. You will receive marketing messages from Indeed and may
            opt out at any time by following the unsubscribe link in our
            messages, or as detailed in our terms.
          </Text>
          <LoginFb />
        </Box>
      </Container>
      <br />
      <br />
      <Box bg="#fff7f7">
        <Footer />
      </Box>
    </Box>
  );
}
