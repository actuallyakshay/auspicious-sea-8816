import { StarIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../JobContext/JobContext";
import AlertInfo from "../Molecules/AlertInfo";
import { AuthContext } from "./AuthContext/AuthContext";

export default function SaveDataButton({ handleSaveData }) {
  const { state, dispatch } = useContext(JobContext);
  const { authState, authDispatch } = useContext(AuthContext);
  const toast = useToast();
  console.log(state.singleJobData);

  return (
    <>
      <Flex gap="4">
        {!authState.isAuth ? (
          <Button
            width="150px"
            colorScheme="facebook"
            variant="solid"
            onClick={() =>
              toast({
                position: "top",
                render: () => (
                  <Text borderRadius="10px" color="white" p={3} bg="red.500">
                    hmm ! Want to apply ? Please Login First..
                  </Text>
                ),
              })
            }
          >
            Apply Now
          </Button>
        ) : (
          <Link to="/step1">
            <Button
              width="150px"
              colorScheme="facebook"
              variant="solid"
              onClick={() => handleSaveData(state.singleJobData)}
            >
              Apply Now
            </Button>
          </Link>
        )}

        {!authState.isAuth ? (
          <Button
            width="20px"
            colorScheme="gray"
            variant="solid"
            onClick={() =>
              toast({
                position: "top",
                render: () => (
                  <Text borderRadius="10px" color="white" p={3} bg="blue.500">
                     wanna save job? {"   "}Please Login First ....
                  </Text>
                ),
              })
            }
          >
            <StarIcon />
          </Button>
        ) : (
          <Button
            width="20px"
            colorScheme="gray"
            variant="solid"
            onClick={() => handleSaveData(state.singleJobData)}
          >
            <StarIcon />
          </Button>
        )}
      </Flex>
    </>
  );
}
