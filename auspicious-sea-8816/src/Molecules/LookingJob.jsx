import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function LookingJob() {
  return (
    <Container>
      <VStack>
        <Image
          src="https://i.ibb.co/jw56cFP/Screenshot-2022-09-29-222204.png"
          alt="x-x"
          w="250px"
        />
        <br />
        <Heading color="blackAlpha.700" size='md'>No jobs saved yet</Heading>
        <Text color='gray'>Jobs you save appear here.</Text>
        <Heading size='sm' color='navy'>Not seeing a job ?</Heading>
        <br />
        <Link to="/">
          <Button colorScheme="facebook" width="200px" rightIcon={<ArrowRightIcon/>}>
            Find Job 
          </Button>
        </Link>
      </VStack>
    </Container>
  );
}
