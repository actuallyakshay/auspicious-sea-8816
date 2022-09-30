import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import {
  Box,
  Button,
  Center,
  Divider,
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
import { Link, NavLink } from "react-router-dom";

export default function LoginFb() {
  return (
    <>
      <Stack spacing={3} align={"center"} maxW={"md"} w={"full"}>
        <br />
          <FacebookLogin />
          <Box pt="3">
            <GoogleLogin />
          </Box>
          <br />
        </Stack>
      <Flex justifyContent="center">
        <Link to='/phone'>
          <Button colorScheme="green"  w={{base:"250px" ,lg:"400px"}} rightIcon={<ArrowRightIcon />}>
            Login with phone number
          </Button>
        </Link>
      </Flex>
    </>
  );
}
