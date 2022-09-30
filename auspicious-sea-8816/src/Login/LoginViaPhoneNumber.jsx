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
import LoginFb from "./LoginCredentials";
import PhoneLogin from "./PhoneLogin";

export default function ContinueLogin() {
  return (
    <Box w="full" bg=" #fff7f7">
      <Box justifyContent="center" display="flex" py="30px">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/768px-Indeed_logo.svg.png?20210916154409"
          w="100px"
        />
      </Box>
      <Container
        border="1px solid gray"
        borderRadius="5px"
        justifyContent="center"
        w={{ base:"90%" , md:"36%"}}
        p="6"
        bg="white"
      >
        <Box>
          <Heading size="md" mb="2">
            Login with phone number
          </Heading>
          <Text fontSize="18px" color="gray.600">
            Keep you account safe.{" "}
          </Text>
          <br />
          <Text fontSize="13px" color="gray">
            We only use your information as described in our privacy policy.
            Google may ask for your permission to share details with Indeed like
            your name, profile picture, public profile information, and email
            address.
          </Text>
          <br />
          <PhoneLogin />
          <br />
          <Text fontSize="14px" as="ins" color="blue">
            <Link to='/login'>login with email instead !</Link>
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
