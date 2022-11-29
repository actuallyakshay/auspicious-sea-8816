import {
  AtSignIcon,
  ChevronDownIcon,
  Search2Icon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Button,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { FILTER_ACTION, LOADING_ACTION } from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";
import { HomepageDataCall } from "./ApiCalls";

export default function FilterJob({ page }) {
  const { state, dispatch } = useContext(JobContext);

  const handlefilter = (e) => {
    const value = e.target.value;
    dispatch(LOADING_ACTION);
    axios
      .get(`http://localhost:8080/job?q=${value}&page=${page}&limit=${10}`)
      .then((res) => dispatch(FILTER_ACTION(res.data)));
  };
  return (
    <>
      <Grid
        gap="2"
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(6,1fr)",
        }}
      >
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
            onCLick={handlefilter}
          >
            Job Type
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="category_1" value="Full-time">
              Full Time
            </MenuItem>
            <MenuItem name="category_1" value="Fresher">
              Fresher
            </MenuItem>
            <MenuItem name="category_1" value={"Part-time"}>
              Part time
            </MenuItem>
            <MenuItem name="category_1" value={"Regular / Permanent"}>
              Regular / Permanent
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
          >
            Shift-wise
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="category_2" value="Morning shift">
              Morning shift
            </MenuItem>
            <MenuItem name="category_2" value="Day shift">
              Day shift
            </MenuItem>
            <MenuItem name="category_2" value="Evening shift">
              Evening shift
            </MenuItem>
            <MenuItem name="category_2" value="Night shift">
              Night shift
            </MenuItem>
            <MenuItem name="category_2" value="Flexible shift">
              Flexible shift
            </MenuItem>
            <MenuItem name="category_2" value="Weekend availability">
              Weekend availability
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
            value="new"
          >
            New Jobs
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="label" value="new">
              New Jobs
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
          >
            Indeed jobs
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="ialbl" value="Apply securely with Indeed Resume">
              New Jobs
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
          >
            Date Posted
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="date" value="Posted 2 days ago">
              Posted 2 days ago
            </MenuItem>
            <MenuItem name="date" value="Posted 3 days ago">
              Posted 3 days ago
            </MenuItem>
            <MenuItem name="date" value="Posted 5 days ago">
              Posted 5 days ago
            </MenuItem>
            <MenuItem name="date" value="Posted 6 days ago">
              Posted 6 days ago
            </MenuItem>
            <MenuItem name="date" value="Posted 30+ days ago">
              Posted 30+ days ago
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
          >
            Based on Hiring
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="urgentlyHiring" value="Urgently hiring">
              Urgently hiring
            </MenuItem>
            <MenuItem name="date" value="Hiring ongoing">
              Hiring ongoing
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.300"
            rightIcon={<ChevronDownIcon />}
          >
            WFH jobs
          </MenuButton>
          <MenuList onClick={handlefilter}>
            <MenuItem name="date_3" value="Work From Home ₹2,30,000">
              Work From Home
            </MenuItem>
          </MenuList>
        </Menu>
      </Grid>
    </>
  );
}
