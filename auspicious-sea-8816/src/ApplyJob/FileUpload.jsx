import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataForBox1 from "../Components/DataForBox1";
import Box2 from "../Components/SingleBox2";

export default function FileUpload() {

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
          <CircularProgress value={40} color="red.400">
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
          <Heading size="sm" mt="2">
            Application step 2 of 5
          </Heading>
          <br />
          <Heading size="lg" color="blackAlpha.800">
            Add a resume for The New Ways B.V.
          </Heading>
          <br />
          <Text
            as="ins"
            fontSize="14px"
            color="blackAlpha.900"
            fontWeight="600"
          >
            Uplaod your resume here
          </Text>
          <Flex
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Image src="https://i.ibb.co/1rMQw3Z/Screenshot-2022-09-30-011747.png" />
            <br />
            <Box>
              <Input mt="2" type="file" alignItems="center" w="220px" />
            </Box>
          </Flex>
          <br />
          <Flex justifyContent="center">
            <Link to="/step2">
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
