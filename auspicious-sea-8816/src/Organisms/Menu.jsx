import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import {
  AiTwotoneMail,
  AiOutlineMail,
  AiFillSetting,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";

import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";

export default function MenuFunc() {
  const { authState, authDispatch } = useContext(AuthContext);

  const handleSignout = () => {
    authDispatch({ type: "SIGN_OUT" });
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={
            authState.isAuth ? (
              <Avatar
                name="Dan Abrahmov"
                src={`${authState?.result?.user?.photoURL}`}
              />
            ) : (
              <FaUserAlt />
            )
          }
          variant="none"
          borderRadius="none"
          py={7}
          _hover={{
            textDecoration: "none",
            // borderBottom: "2px solid navy",
            // backgroundColor: "rgb(230, 238, 255)",
          }}
        />
        <MenuList
          w="20"
          bg="white"
          h="55vh"
          py="5"
          pb="5"
          borderRadius="none"
          boxShadow="xl"
        >
          <MenuItem>
            <Heading mb="5px" size="xs" color="balckAlpha.600">
              {authState.isAuth
                ? authState?.result?.user?.email ||
                  authState?.result?.user?.phoneNumber
                : ""}
            </Heading>
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            size="xs"
            mb="5px"
            icon={<AiTwotoneMail />}
          >
            Profile
          </MenuItem>
          <NavLink to="/savedjob">
            <MenuItem
              mb="5px"
              fontSize="16px"
              fontWeight="500"
              icon={<BsFillHeartFill />}
            >
              My Jobs
            </MenuItem>
          </NavLink>
          <MenuItem
            mb="5px"
            fontSize="16px"
            fontWeight="500"
            icon={<MdReviews />}
          >
            My reviews
          </MenuItem>
          <MenuItem
            mb="5px"
            fontSize="16px"
            fontWeight="500"
            icon={<AiOutlineMail />}
          >
            Email Setting
          </MenuItem>
          <MenuItem
            mb="5px"
            fontSize="16px"
            fontWeight="500"
            icon={<AiFillSetting />}
          >
            Setting
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            icon={<AiFillQuestionCircle />}
            mb="5px"
            onClick={handleSignout}
          >
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
