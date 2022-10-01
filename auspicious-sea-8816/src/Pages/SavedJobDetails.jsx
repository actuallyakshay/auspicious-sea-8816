import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RiBuildingFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { DEL_ACTION } from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";
export default function SavedJobDetails({ elem }) {
    const { JobTitle, companyName, companyLocation } = elem;
    
    const {state,dispatch} = useContext(JobContext)

  const handelete = (item) => {
      console.log(item);
      dispatch(DEL_ACTION(item))
  };

  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1fr)",
        sm: "repeat(1fr)",
        md: "2fr 1fr",
      }}
    >
      <Flex gap="8">
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="blackAlpha.200"
          color="blackAlpha.700"
          h="60px"
          w="60px"
          borderRadius="50%"
        >
          <RiBuildingFill />
        </Flex>
        <Flex flexDirection="column" gap="1">
          <Heading size="md">{JobTitle}</Heading>
          <Text>{companyName}</Text>
          <Text>{companyLocation}</Text>
          <Text fontSIze="14px" color="gray">
            Saved Today
          </Text>
        </Flex>
      </Flex>
      <Flex p="3" gap="3" flexDirection={{ base: "column", md: "row" }}>
        <Button colorScheme="facebook" variant="solid">
          <Link to='/step1'>
          Apply now
          </Link>  
        </Button>
        <Button colorScheme="facebook" variant="outline" fontWeight="700">
          Update Status
        </Button>
        <Button onClick={() => handelete(JobTitle)} colorScheme="red">
          <CloseIcon />
        </Button>
      </Flex>
    </Grid>
  );
}
