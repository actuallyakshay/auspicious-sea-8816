import { Box, Button, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { JobContext } from "../JobContext/JobContext";
import LookingJob from "../Molecules/LookingJob";
import { Navbar } from "../Organisms/Navbar";
import JobCompo from "./SavedJobCompo";

export default function SavedJobPage() {
  const { state, dispatch } = useContext(JobContext);

  const a = state.saveData.length;
  return (
    <>
      <Navbar />
      <Box  h='88vh' >
        <Box w="80%" m="auto" mt='3'>
          {a > 0 ? <Heading size="xl">My Jobs</Heading> : null}
          <br />
        </Box>
        {a > 0 ? <JobCompo /> : <LookingJob />}
      </Box>
    </>
  );
}
