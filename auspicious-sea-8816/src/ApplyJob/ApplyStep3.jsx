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
import { Link } from "react-router-dom";
import DataForBox1 from "../Components/DataForBox1";
import Box1 from "../Components/SearchBox1";
import Box2 from "../Components/SingleBox2";
import SinglejobData from "../Components/SingleJobData";
import { Navbar } from "../Organisms/Navbar";

export default function ApplyStep3() {
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
          <CircularProgress value={80} color="yellow.400">
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
          <Heading size="sm" mt="2">
            Application step 4 of 5
          </Heading>
          <br />
          <Heading size="md" color="blackAlpha.800">
            Enter a past job that shows relevant experience
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
              <FormControl id="email">
                <FormLabel>Job Title</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Company</FormLabel>
                <Input type="text" />
              </FormControl>
            </Stack>
          </Flex>

          <Flex mt="4">
            <Link to="/step4">
              <Button colorScheme="facebook" rightIcon={<ArrowRightIcon />}>
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
