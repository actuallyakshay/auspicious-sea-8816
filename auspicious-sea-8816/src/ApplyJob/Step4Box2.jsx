import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Progress,
  Switch,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import { JobContext } from "../JobContext/JobContext";

export default function Step4Box2() {
  const [dis, setDis] = useState(false);
  const toast = useToast();

  const { state } = useContext(JobContext);

  const { authState } = useContext(AuthContext);

  const { name, city, number } = state.personalinfo;

  return (
    <Flex direction="column">
      <Heading size="md">
        Please review your application Contact information
      </Heading>
      <br />
      <Heading size="xs" color="blackAlpha.600">
        Conatct Info
      </Heading>
      <br />
      <VStack alignItems="flex-start" boxShadow="lg" p="5" borderRadius="10px">
        <Text fontSize="15px">Full Name</Text>
        <Heading size="xs">{name}</Heading>
        <Divider />
        <Text fontSize="15px"> Email Address</Text>
        <Heading size="xs" width={{ base: "180px", sm: "250px", md: "250px" }}>
          {authState.result.user.email}
        </Heading>
        <Text
          fontSize="12px"
          color="gray"
          w={{ base: "150px", sm: "300px", md: "330px" }}
        >
          To mitigate fraud, Indeed may mask your email address. If masked, the
          employer will see an address like{" "}
          akshayrajput1197wdxpn_fng@indeedemail.com. Some employers, however,
          may still be able to unmask and see your actual email address.
        </Text>
        <Divider />
        <Text fontSize="15px">City,State</Text>
        <Heading size="xs">{city}</Heading>
        <Divider />
        <Text fontSize="15px">Phone Number</Text>
        <Heading size="xs">{number}</Heading>
      </VStack>
      <br />
      <Heading size="sm" color="blackAlpha.600">
        Employer questions
      </Heading>
      <VStack alignItems="flex-start" p="5" borderRadius="10px" boxShadow="lg">
        <Text fontSize="14px">
          How many years of total work experience do you have?
        </Text>
        <Heading size="sm">{state.exp}</Heading>
      </VStack>
      <br />
      <Heading size="sm" color="blackAlpha.600">
        Supporting documents
      </Heading>
      <VStack alignItems="flex-start" p="5" borderRadius="10px" boxShadow="lg">
        <Text fontSize="14px">
          No cover letter or additional documents included (optional)
        </Text>
      </VStack>
      <br />
      <Text fontSize="15px">
        If you notice an error in your application, please{" "}
        <Text as="ins" color="blue">
          contact Indeed
        </Text>
      </Text>
      <br />
      <Divider />
      <br />
      <HStack spacing="4">
        <Heading size="sm">
          {!dis
            ? "Get email updates for the latest package manager jobs in Noida, Uttar Pradesh"
            : "Turn off email updates for the latest package manager jobs in Noida, Uttar Pradesh"}
        </Heading>
        <Switch size="lg" onChange={() => setDis(!dis)} />
      </HStack>
      <br />
      <Text fontSize="12px">
        By creating a job alert, you agree to our{" "}
        <Text as="ins" color="blue">
          Terms.{" "}
        </Text>
        You can change your consent settings at any time by unsubscribing or as
        detailed in our terms.
      </Text>
      <br />
      <Divider />
      <br />
      <Text fontSize="13px" color="gray">
        By pressing apply: 1) you agree to our Terms, Cookie & Privacy Policies;
        2) you consent to your application being transmitted to the Employer
        (Indeed does not guarantee receipt), & processed & analyzed in
        accordance with its & Indeed's terms & privacy policies; & 3) you
        acknowledge that when you apply to jobs outside your country it may
        involve you sending your personal data to countries with lower levels of
        data protection.
      </Text>
      <br />
      <Text fontSize="13px" color="gray">
        By submitting your phone number, you confirm that you are the subscriber
        and primary owner and you consent to receiving calls and text messages
        from Indeed and employers.
      </Text>
      <br />

      <Button
        w="fit-content"
        colorScheme="facebook"
        rightIcon={<CheckCircleIcon />}
        onClick={() =>
          toast({
            position: "top",
            title: "Your application has been submitted successfully ",
            description: "We'll get back to you !",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        <Link to="/"> Submit your application </Link>
      </Button>

      <br />
      <br />
      <Text fontSize="15px">
        Having an issue with this application?{" "}
        <Text as="ins" color="blue">
          Tell us more
        </Text>
      </Text>
    </Flex>
  );
}
