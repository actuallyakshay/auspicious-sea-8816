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
import { Link } from "react-router-dom";

export default function MenuFunc() {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaUserAlt />}
          variant="none"
          borderRadius="none"
          py={7}
          _hover={{
            textDecoration: "none",
            borderBottom: "2px solid navy",
            backgroundColor: "rgb(230, 238, 255)",
          }}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command="⌘T">
            <Heading size="sm">Email : {""}</Heading>
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            size="xs"
            icon={<AiTwotoneMail />}
            command="⌘P"
          >
            Profile
          </MenuItem>

          <MenuItem
            fontSize="16px"
            fontWeight="500"
            icon={<BsFillHeartFill />}
            command="⌘⇧"
          >
            My Jobs
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            icon={<MdReviews />}
            command="⌘R"
          >
            My reviews
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            icon={<AiOutlineMail />}
            command="⌘E"
          >
            Email Setting
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            icon={<AiFillSetting />}
            command="⌘S"
          >
            Setting
          </MenuItem>
          <MenuItem
            fontSize="16px"
            fontWeight="500"
            icon={<AiFillQuestionCircle />}
            command="⌘H"
          >
            Help Center
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
