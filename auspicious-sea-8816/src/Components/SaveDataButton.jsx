import { StarIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../JobContext/JobContext";

export default function SaveDataButton({handleSaveData}) {

    const { state, dispatch } = useContext(JobContext);

  return (
    <>
      <Flex gap="4">
        <Link to="/step1">
          <Button width="150px" colorScheme="facebook" variant="solid">
            Apply Now
          </Button>
        </Link>
        <Button
          width="20px"
          colorScheme="gray"
          variant="solid"
          onClick={() => handleSaveData(state.singleJobData)}
        >
          <StarIcon />
        </Button>
      </Flex>
    </>
  );
}
