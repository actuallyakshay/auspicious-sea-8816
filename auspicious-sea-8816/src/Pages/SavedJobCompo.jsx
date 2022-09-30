import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useContext } from "react";
import { JobContext } from "../JobContext/JobContext";
import SavedJobDetails from "./SavedJobDetails";

export default function JobCompo() {
  const { state, dispatch } = useContext(JobContext);
  console.log("abhaaiii", state.saveData);

  return (
    <>
      <Grid
        w="80%"
        m="auto"
        // borderBottom="1px solid gray"
        // borderTop="1px solid gray"
      >
        <Box py="20px">
          {state.saveData?.map((elem) => {
            return (
              <>
                    <SavedJobDetails elem={elem} />
                    <br />
                    <hr />
                    <br />
              </>
            );
          })}
        </Box>
      </Grid>
    </>
  );
}
