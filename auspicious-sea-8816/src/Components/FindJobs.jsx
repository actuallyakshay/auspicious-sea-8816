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

export default function FindJobs({ handleSearch, page }) {
  const [query, setQuery] = useState({ companyLocation: "", JobTitle: "" });
  const { state, dispatch } = useContext(JobContext);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

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
            <Input
              type="text"
              value={query.JobTitle}
              name="JobTitle"
              placeholder="Enter Job title"
              onChange={(e) => handleChange(e)}
            />
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
              value={query.companyLocation}
              onChange={(e) => handleChange(e)}
            />
            <InputRightElement />
          </InputGroup>
        </Box>
        <Box width={{ base: "250px", sm: "300px", md: "fit-content" }}>
          <Button
            colorScheme="facebook"
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
        <FilterJob page={page} />
      </VStack>

      <hr />
    </>
  );
}
