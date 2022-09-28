import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import {
  SUCCESS_ACTION,
  LOADING_ACTION,
  ERROR_ACTION,
} from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";
import Loading from "../Molecules/Skeleton";
import { HomepageDataCall } from "./ApiCalls";
import FindJobs from "./FindJobs";
import JobBox from "./JobBox";
import JobFeed from "./JobFeed";
import Pegination from "./Pegination";

export default function Jobs() {
  const { state, dispatch } = useContext(JobContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    dispatch(LOADING_ACTION);
    HomepageDataCall({ page, limit: 5 })
      .then((res) => dispatch(SUCCESS_ACTION(res.data)))
      .catch(() => dispatch(ERROR_ACTION));
  };
//   console.log(state.data);

  const handleClick = (val) => {
    setPage(page + val);
  };

  const handleSearch = (query) => {
    dispatch(LOADING_ACTION);
    HomepageDataCall({ page, limit: 20, query })
      .then((res) => dispatch(SUCCESS_ACTION(res.data)))
          .catch(() => dispatch(ERROR_ACTION));
      console.log(state.data);
  };

  return state.isLoading ? (
    <Loading />
  ) : (
    <>
      <FindJobs handleSearch={handleSearch} />
      <JobFeed />
      <Box bg="#faf9f8" mt="10">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
          }}
          bg="white"
          gap="10"
          width="75vw"
          margin="auto"
        >
          <Grid gridTemplateColumns="repeat(1,1fr)" gap={3}>
            {state.data?.map((item) => {
              return <JobBox key={item.id} item={item} />;
            })}
          </Grid>
          <GridItem>2</GridItem>
        </Grid>
        <Flex justifyContent="center" gap={2} mt="10">
          <Pegination handleClick={handleClick} page={page} />
        </Flex>
      </Box>
    </>
  );
}
