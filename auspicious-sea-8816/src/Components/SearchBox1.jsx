import { StarIcon } from "@chakra-ui/icons";
import { Grid, VStack, Flex, Heading, Text, Button,Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { MdFlashOn } from "react-icons/md";
import { RiHeartFill } from "react-icons/ri";
import { JobContext } from "../JobContext/JobContext";

export default function Box1() {
  const { state, dispatch } = useContext(JobContext);
  const { JobTitle, attribute_snippet, companyName } = state.singleJobData;
  return (
    <Flex
      flexDirection="column"
      gap="1"x
      borderBottom="1px solid grey"
      pb="20px"
      p={4}
    >
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
      <Flex gap="4">
        <Button width="150px" colorScheme="facebook" variant="solid">
          Apply Now
        </Button>
        <Button width="20px" colorScheme="gray" variant="solid">
          <StarIcon />
        </Button>
      </Flex>
    </Flex>
  );
}
