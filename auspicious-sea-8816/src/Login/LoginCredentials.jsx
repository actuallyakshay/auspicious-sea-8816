import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsApple } from "react-icons/bs";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import FacebookLogin from "./Facebook";
import GoogleLogin from "./GoogleLogin";
import PhoneLogin from "./PhoneLogin";

export default function LoginFb() {
  return (
    <>
      <Center mt="6">
        <Stack spacing={3} align={"center"} maxW={"md"} w={"full"}>
          {/* Facebook */}
          {/* <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
            <Center>
              <Text>Continue with Facebook</Text>
            </Center>
          </Button> */}
          <FacebookLogin />

          {/* Google */}
          <GoogleLogin />

          {/* LinkedIn */}
          {/* <Button w={"full"} colorScheme="gray" leftIcon={<BsApple />}>
            <Center>
              <Text>Continue with Apple</Text>
            </Center>
          </Button> */}
          <PhoneLogin />
        </Stack>
      </Center>
      <hr />
      <br />
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <br />
      <Flex justifyContent="center">
        <Button colorScheme="yellow" w="50%" rightIcon={<ArrowRightIcon />}>
          Continue
        </Button>
      </Flex>
    </>
  );
}
