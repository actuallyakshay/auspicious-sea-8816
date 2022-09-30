import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Checkbox,
  Textarea,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AddIcon, WarningIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function DrawerPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dis, setDis] = useState(true);
  const firstField = useRef();
  const toast = useToast();
  const handleClick = (e) => {
    setDis(!dis);
  };
  return (
    <>
      <br />
      <Button rightIcon={<WarningIcon />} colorScheme="red" onClick={onOpen}>
        Report Job
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontWeight="600">
            Choose a Problem :
          </DrawerHeader>
          <br />
          <br />
          <Flex px="5" gap="3" flexDirection="column">
            <Checkbox
              size="md"
              colorScheme="green"
              name="val"
              checked
              onChange={handleClick}
            >
              It's offensive or harassing
            </Checkbox>
            <Checkbox size="md" colorScheme="green" onChange={handleClick}>
              Asking for money or seems like a fake job
            </Checkbox>
            <Checkbox size="md" colorScheme="green" onChange={handleClick}>
              Incorrect company, location or job details
            </Checkbox>
            <Checkbox size="md" colorScheme="green" onChange={handleClick}>
              I think it's NOT a Job, but selling something
            </Checkbox>
            <Checkbox size="md" colorScheme="green" onChange={handleClick}>
              Other
            </Checkbox>
            <Textarea
              placeholder="Describe your problem here:"
              size="sm"
              resize="none"
              borderRadius="5px"
              onChange={handleClick}
            />
          </Flex>
          <br />

          <DrawerFooter borderTopWidth="1px">
            <Button
              disabled={dis ? true : false}
              onClick={() =>
                toast({
                  title: "Sorry for the inconvenience",
                  description: "We're looking forward to resolve this issue ",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
              colorScheme="facebook"
            >
              Report to Indeed
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
