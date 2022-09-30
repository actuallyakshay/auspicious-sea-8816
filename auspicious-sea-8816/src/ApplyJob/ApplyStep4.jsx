import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Heading,
  Progress,
  Text,
  useConst,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { JobContext } from "../JobContext/JobContext";
import Step4Box2 from "./Step4Box2";

export default function ApplyStep4() {
    const { state, dispatch } = useContext(JobContext);
    const {JobTitle,companyLocation} = state.singleJobData

  console.log("efew",state);

  return (
    <>
      <br />
      <br />
      <Container justifyContent="center" flexDirection="column">
        <CircularProgress value={100} color="green.600">
          <CircularProgressLabel>100%</CircularProgressLabel>
        </CircularProgress>
        <Heading size="xs" mt="2">
          Application step 5 of 5
        </Heading>
      </Container>
      <Container borderRadius="10px">
        <VStack
          border="1px solid rgb(224, 235, 235)"
          p="5"
          mt="5"
          mb="5"
          borderRadius="10px"
        >
          <Heading size="sm">Job Title : {JobTitle}</Heading>
          <Text color="gray" fontSize="12px">
            Company Loaction : {companyLocation}
          </Text>
        </VStack>
        <Container
          border="1px solid rgb(224, 235, 235)"
          p="10"
          borderRadius="10px"
        >
          <Step4Box2 />
        </Container>
      </Container>
    </>
  );
}
