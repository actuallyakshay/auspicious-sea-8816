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
import { FaHome } from "react-icons/fa";
import { JobContext } from "../JobContext/JobContext";
import FilterJob from "./FilteringSection";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";

export default function FindJobs({ handleSearch }) {
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
            width={{ base: "250px", sm: "300px", md: "400px" }}
          >
            <InputLeftAddon children="What" fontWeight="600" />
            <Input type="tel" placeholder="Enter Job title" />
            <InputRightElement children={<FcSearch />} />
          </InputGroup>
        </Box>
        <Box>
          <InputGroup width={{ base: "250px", sm: "300px", md: "400px" }}>
            <InputLeftAddon children="Where" fontWeight="600" />
            <Input
              placeholder="City name (Keep first letter Capital)"
              type="text"
              name="companyLocation"
              onChange={handleChange}
            />
            <InputRightElement  />
          </InputGroup>
        </Box>
        <Box width={{ base: "250px", sm: "300px", md: "fit-content" }}>
          <Button
             colorScheme='facebook'
            // color="white"
            rightIcon={<SearchIcon />}
            onClick={() => handleSearch(query)}
            width={{ base: "250px", sm: "300px", md: "fit-content" }}
          >
            Find Jobs
          </Button>
        </Box>
      </Flex>
      <VStack marginTop={5} mb={3}>
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
        <br />
        <FilterJob />
      </VStack>

      <hr />
    </>
  );
}
