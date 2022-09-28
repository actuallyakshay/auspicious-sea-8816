import {
  ArrowForwardIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { TiArrowForward } from "react-icons/ti";
import { DELETE_ACTION } from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";
import SavedJobs from "../Molecules/Savedjobs";

export default function JobBox({ item }) {
  const {
    id,
    JobTitle,
    label,
    companyName,
    companyLocation,
    attribute_snippet,
    category_1,
    category_2,
    job_snippet,
    date,
    date_2,
    date_3,
    ialbl,
  } = item;

  const { state, dispatch } = useContext(JobContext);

  //   const handleClick = (val) => {
  //     alert(`dfbdu`);
  //     console.log(val);
  //   };

  const handleDelete = (id) => {
    dispatch(DELETE_ACTION(id));
    console.log(id);
  };
  return (
    <Flex
      p="5"
      pr={{ base: "3", sm: "20" }}
      border="1px solid gray"
      borderRadius="10px"
      flexDirection="column"
      gap="2"
    >
      <Flex justifyContent="space-between">
        <Text fontSize="xs" color="purple.700">
          {label}
        </Text>
        <SavedJobs handleDelete={() => handleDelete(id)} />
      </Flex>
      {/* <Button colorScheme="black" variant='ghost' width='200px' onClick={() => handleClick(item)}> */}
      <Link fontSize="lg" fontWeight="700">
        <Box width="350px">{JobTitle}</Box>
        {/* {JobTitle} */}
      </Link>
      {/* </Button> */}
      <Text>{companyName}</Text>
      <Text>{companyLocation}</Text>
      <Flex gap="1" flexDirection={{ base: "column", md: "row" }}>
        <Text
          alignItems="center"
          display="flex"
          gap="1"
          wordSpacing="2"
          fontSize="sm"
          px="1.5"
          py="1"
          borderRadius="3"
          bg="blackAlpha.100"
          color="blackAlpha.700"
          fontWeight="700"
        >
          {" "}
          <CheckCircleIcon />
          {attribute_snippet}
        </Text>
        <Text
          alignItems="center"
          display="flex"
          gap="1"
          wordSpacing="2"
          fontSize="sm"
          px="1.5"
          py="1"
          borderRadius="3"
          bg="blackAlpha.100"
          color="blackAlpha.700"
          fontWeight="700"
          width={{ base: "fit-content" }}
        >
          {" "}
          <StarIcon />
          {category_1}
        </Text>
      </Flex>
      <Text
        alignItems="center"
        display="flex"
        gap="1"
        wordSpacing="2"
        fontSize="sm"
        px="1.5"
        py="1"
        borderRadius="3"
        bg="blackAlpha.100"
        color="blackAlpha.700"
        fontWeight="700"
        width={{ base: "fit-content" }}
      >
        {" "}
        <CalendarIcon /> {category_2}
      </Text>
      <Flex flexDirection="row" gap="1" alignItems="center">
        <TiArrowForward />
        <Text> {ialbl}</Text>
      </Flex>

      <List spacing={3} ml="20px">
        <ListItem fontSize="14px" color="gray">
          <ListIcon
            as={CheckCircleIcon}
            color="blackAlpha.600"
            fontSize="10px"
          />
          {job_snippet}
        </ListItem>
      </List>
      <Text fontSize="14px" color="gray">
        {date} {date_2} {" "}
        <span style={{ fontWeight: "600", color: "rgb(115, 115, 115)" }}>
          {date_3}
        </span>
      </Text>
    </Flex>
  );
}
