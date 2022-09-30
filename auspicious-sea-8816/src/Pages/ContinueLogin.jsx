import {
  Box,
  Text,
  Container,
  Heading,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Organisms/Footer";
import LoginFb from "../Login/LoginCredentials";

export default function ContinueLogin() {
  return (
    <Box w="full" bg=" #fff7f7">
      <Box justifyContent="center" display="flex" py="50px">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/768px-Indeed_logo.svg.png?20210916154409"
          w="100px"
        />
      </Box>
      <Container
        border="1px solid gray"
        borderRadius="5px"
        justifyContent="center"
        w="36%"
        p="6"
        bg="white"
      >
        <Box>
          <Heading size="md" mb="2">
            Welcome to Indeed
          </Heading>
          <Text fontSize="18px" color="gray.600">
            Keey you account safe.{" "}
          </Text>
          <br />
          <Text fontSize="13px" color="gray">
            Continue as <span>email :</span>{" "}
            <Text as="ins" color="blue">
              (not you)
            </Text>
          </Text>
          <br />
          <Text fontSize="13px" color="gray">
            We only use your information as described in our privacy policy.
            Google may ask for your permission to share details with Indeed like
            your name, profile picture, public profile information, and email
            address.
          </Text>
          <br />
          <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
            <Center>
              <Text>Continue with Google</Text>
            </Center>
          </Button>
          <br />
          <br />
          <Text fontSize="14px" as="ins" color="blue">
            <Link>login with a password instead</Link>
          </Text>
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
