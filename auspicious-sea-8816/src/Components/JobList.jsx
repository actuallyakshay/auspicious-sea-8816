import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
  Image,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import {
  SUCCESS_ACTION,
  LOADING_ACTION,
  ERROR_ACTION,
  FIND_ACTION,
} from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";
import Loading from "../Molecules/Skeleton";
import Footer from "../Organisms/Footer";
import { HomepageDataCall } from "./ApiCalls";
import FindJobs from "./FindJobs";
import JobBox from "./JobBox";
import JobFeed from "./JobFeed";
import Pegination from "./Pegination";
import SinglejobData from "./SingleJobData";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Jobs() {
  const { state, dispatch } = useContext(JobContext);
  const a = Object.keys(state.singleJobData).length;
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const limit = 10;

  console.log("url", process.env.REACT_APP_URL);

  useEffect(() => {
    let obj = { page };
    if (limit) {
      obj = { ...obj, limit };
    }
    setSearchParams(obj);
  }, [page, limit]);

  useEffect(() => {
    getData();
  }, [page, dispatch]);

  const getData = () => {
    dispatch(LOADING_ACTION);
    axios
      .get(`${process.env.REACT_APP_URL}?page=${page}&limit=${10}`)
      .then((res) => dispatch(SUCCESS_ACTION(res.data)))
      .catch(() => dispatch(ERROR_ACTION));
  };

  const handleClick = (val) => {
    setPage(page + val);
  };

  const handleSearch = (query) => {
    const { companyLocation, JobTitle } = query;
    if (companyLocation != "" && JobTitle != "") {
      dispatch(LOADING_ACTION);
      axios
        .get(
          `${
            process.env.REACT_APP_URL
          }?where=${companyLocation}&what=${JobTitle}&page=${page}&limit=${10}`
        )
        .then((res) => {
          dispatch(FIND_ACTION(res.data));
        });
    } else if (companyLocation != "") {
      dispatch(LOADING_ACTION);
      axios
        .get(
          `${
            process.env.REACT_APP_URL
          }?where=${companyLocation}&page=${page}&limit=${10}`
        )
        .then((res) => {
          dispatch(FIND_ACTION(res.data));
        })
        .catch(() => dispatch(ERROR_ACTION));
    } else if (JobTitle != "") {
      dispatch(LOADING_ACTION);
      axios
        .get(
          `${
            process.env.REACT_APP_URL
          }?what=${JobTitle}&page=${page}&limit=${10}`
        )
        .then((res) => {
          dispatch(FIND_ACTION(res.data));
          // console.log(res.data);
        })
        .catch(() => dispatch(ERROR_ACTION));
    }
  };

  return state.isLoading ? (
    <Loading />
  ) : (
    <>
      <FindJobs page={page} handleSearch={handleSearch} />
      <JobFeed />
      <Box bg="#faf9f8" mt="10" display={{ base: "none", md: "block" }}>
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
          <GridItem>
            {a !== 0 ? (
              (function abc() {
                setTimeout(() => {
                  {
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />;
                  }
                }, 2000);
                return <SinglejobData />;
              })()
            ) : (
              <Image
                src="https://i.ibb.co/dsZX5h1/logo.png"
                alt="x-x"
                position="sticky"
                top="130px"
              />
            )}
          </GridItem>
        </Grid>
        <Flex justifyContent="center" gap={2} mt="10">
          <Pegination handleClick={handleClick} page={page} />
        </Flex>
      </Box>
      {/* fjwcj /// for mobile phones */}
      <Box bg="#faf9f8" mt="10" display={{ lg: "none", md: "none" }}>
        <Grid
          gridTemplateColumns="1fr"
          bg="white"
          rowGap="10"
          width="75vw"
          margin="auto"
        >
          <GridItem>
            {a !== 0 ? (
              (function abc() {
                setTimeout(() => {
                  {
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />;
                  }
                }, 2000);
                return <SinglejobData />;
              })()
            ) : (
              <Image
                src="https://i.ibb.co/dsZX5h1/logo.png"
                alt="x-x"
                position="sticky"
                top="130px"
              />
            )}
          </GridItem>
        </Grid>
        <br />
        <Container ml="10">
          <Grid gridTemplateColumns="1fr" gap={3}>
            {state.data?.map((item) => {
              return <JobBox key={item.id} item={item} />;
            })}
          </Grid>
          <Flex justifyContent="center" gap={2} mt="10">
            <Pegination handleClick={handleClick} page={page} />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
