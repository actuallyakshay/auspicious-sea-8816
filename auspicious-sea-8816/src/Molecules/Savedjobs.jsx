import {
  AddIcon,
  DragHandleIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  MinusIcon,
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
} from "@chakra-ui/react";

export default function SavedJobs({ handleDelete }) {
  return (
    <Menu>
      <MenuButton
        as={DragHandleIcon}
        aria-label="Options"
        icon={<DragHandleIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={handleDelete} icon={<MinusIcon />}>
          Not Intrested
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>Saved Job</MenuItem>
      </MenuList>
    </Menu>
  );
}
