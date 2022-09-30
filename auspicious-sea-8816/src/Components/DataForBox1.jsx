import { Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { MdFlashOn } from "react-icons/md";
import { JobContext } from "../JobContext/JobContext";

export default function DataForBox1() {
  const { state, dispatch } = useContext(JobContext);
  const { JobTitle, attribute_snippet, companyName } = state.singleJobData;

  return (
    <>
      <Heading size="sm">{JobTitle}</Heading>
      <Text>{companyName}</Text>
      <Text>{attribute_snippet}</Text>
      <Flex flexDirection="row" gap="1" alignItems="center">
        <MdFlashOn color="teal" />
        <Text fontSize="12px" color="gray">
          Responded to 75% or more applications in the past 30 days, typically
          within 10 days.
        </Text>
      </Flex>
    </>
  );
}
