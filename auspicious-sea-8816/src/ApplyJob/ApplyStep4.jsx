import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Heading,
  Progress,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Step4Box2 from "./Step4Box2";

export default function ApplyStep4() {
    
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
          <Heading size="sm">Packaging Design and Operations Manager</Heading>
          <Text color="gray" fontSize="12px">
            The New Ways B.V. - NSEZ, Noida - 201301, Uttar Pradesh
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
