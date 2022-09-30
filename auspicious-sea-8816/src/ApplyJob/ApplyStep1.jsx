import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Progress,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataForBox1 from "../Components/DataForBox1";
import Box2 from "../Components/SingleBox2";
import { FORM_ACTION } from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";

export default function ApplyStep1() {
  const { state, dispatch } = useContext(JobContext);

  const [form, setForm] = useState({
    name: "",
    city: "",
    number: "",
  });

  const handleAdd = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("form", form);
  };

  const handleSetForm = (form) => {
    dispatch(FORM_ACTION(form));
  };

  return (
    <Box bg="gray.50">
      <Flex
        width="80%"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "10", md: "flex" }}
        m="auto"
        mt="10"
      >
        <Container>
          <CircularProgress value={20} color="red.700">
            <CircularProgressLabel>20%</CircularProgressLabel>
          </CircularProgress>
          <Heading size="sm" mt="2">
            Application step 1 of 5
          </Heading>
          <br />
          <Heading size="md" color="blackAlpha.800">
            Enter your details
          </Heading>
          <br />
          <Flex
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack
              spacing={4}
              w={"full"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              boxShadow={"md"}
              p="6"
            >
              <FormControl id="email" isRequired>
                <FormLabel>Enter your name</FormLabel>
                <Input
                  type="text"
                  isRequired
                  name="name"
                  value={form.name}
                  onChange={handleAdd}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Phone number</FormLabel>
                <Input
                  type="number"
                  isRequired
                  name="number"
                  value={form.number}
                  onChange={handleAdd}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>City </FormLabel>
                <Input
                  type="text"
                  isRequired
                  name="city"
                  value={form.city}
                  onChange={handleAdd}
                />
              </FormControl>
            </Stack>
          </Flex>

          <Flex mt="4">
            <Link to="/fileupload">
            <Button
              colorScheme="facebook"
              rightIcon={<ArrowRightIcon />}
              onClick={() => handleSetForm(form)}
            >
              Continue
            </Button>
            </Link>
          </Flex>
        </Container>
        <Container
          ml={{ base: "0", md: "20" }}
          w={{ base: "full", md: "50vw" }}
          boxShadow="md"
          borderRadius="5px"
          pt="2"
          h="auto"
        >
          <DataForBox1 />
          <br />
          <hr />
          <Box2 />
        </Container>
      </Flex>
    </Box>
  );
}
