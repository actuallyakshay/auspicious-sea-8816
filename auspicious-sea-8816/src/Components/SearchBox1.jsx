import { StarIcon } from "@chakra-ui/icons";
import {
  Grid,
  VStack,
  Flex,
  Heading,
  Text,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useContext } from "react";
import { MdFlashOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { SAVED_JOB } from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";
import DataForBox1 from "./DataForBox1";
import SaveDataButton from "./SaveDataButton";

export default function Box1() {
  const { state, dispatch } = useContext(JobContext);
  const { JobTitle, attribute_snippet, companyName } = state.singleJobData;

  const handleSaveData = (elem) => {
    dispatch(SAVED_JOB(elem));
  };
  return (
    <Flex
      flexDirection="column"
      gap="1"
      x
      borderBottom="1px solid grey"
      pb="20px"
      p={4}
    >
      <DataForBox1 />
      <SaveDataButton handleSaveData={handleSaveData} state={state} />
    </Flex>
  );
}
