import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";

import { FcSearch } from "react-icons/fc";
import { MdLocationCity } from "react-icons/md";
import { JobContext } from "../JobContext/JobContext";

export default function FindJobs({handleSearch}) {
  const [query, setQuery] = useState({ companyLocation: "" });
  const { state, dispatch } = useContext(JobContext);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  // console.log(query);

  return (
    <>
      <Flex
        pt="55"
        w="70vw"
        margin="auto"
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <InputGroup
            variant="outline"
            width={{ base: "200px", sm: "300px", md: "400px" }}
          >
            <InputLeftAddon children="What" fontWeight="600" />
            <Input type="tel" placeholder="Job title, keywords or company" />
            <InputRightElement children={<FcSearch />} />
          </InputGroup>
        </Box>
        <Box>
          <InputGroup width={{ base: "200px", sm: "300px", md: "400px" }}>
            <InputLeftAddon children="Where" fontWeight="600" />
            <Input
              placeholder="City, State or Pincode"
              type="text"
              name="companyLocation"
              onChange={handleChange}
            />
            <InputRightElement children={<MdLocationCity />} />
          </InputGroup>
        </Box>
        <Box width="fit-content">
          <Button
            bg="blue.600"
            color="white"
            onClick={() => handleSearch(query)}
          >
            Find Jobs
          </Button>
        </Box>
      </Flex>
      <VStack marginTop={5} mb={12}>
        <HStack>
          <Heading letterSpacing={0.5} size="sm" color="blue.600">
            Post your resume –{" "}
          </Heading>
          <span>It only takes a few seconds</span>
        </HStack>
        <HStack>
          <Heading letterSpacing={0.5} size="sm" color="blue.600">
            Employers: Post a job –
          </Heading>{" "}
          <span>Your next hire is here</span>
        </HStack>
      </VStack>

      <hr />
    </>
  );
}
