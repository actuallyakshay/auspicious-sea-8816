import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { JobContext } from "../JobContext/JobContext";
import Description from "./Description";

export default function Box2() {
  const { state, dispatch } = useContext(JobContext);

  const { attribute_snippet, category_1, category_2 } = state.singleJobData;

  return (
    <Box p="5" height="61vh" overflowY="scroll">
      <Flex flexDirection="column" pb="15px">
        <Heading size="md">Job details</Heading>
        <br />
        <Heading size="xs">Salary</Heading>

        <Text fontSize="14px">{attribute_snippet}</Text>
        <br />
        <Heading size="xs">Benefits & Perks</Heading>
        <Text fontSize="14px">Cell phone reimbursement</Text>
        <br />
        <Heading size="xs">Job Type</Heading>
        <Text fontSize="14px">
          {category_1} - {category_2}
        </Text>
      </Flex>
      <hr />
      <br />
      <Heading size="sm">Benefits</Heading>
      <Text fontSize="14px" as="i">
        Pulled from the full job description
      </Text>
      <br />
      <br />
      <Heading
        px="2"
        py="1"
        width="fit-content"
        border="1px solid rgb(208, 208, 226)"
        size="xs"
        borderRadius="5px"
      >
        Cell phone reimbursement
      </Heading>
      <br />
      <hr />
      <Description />
    </Box>
  );
}
