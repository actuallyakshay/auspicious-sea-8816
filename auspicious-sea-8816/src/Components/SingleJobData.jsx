import Box1 from "./SearchBox1";
import Box2 from "./SingleBox2";
import { Box } from "@chakra-ui/react";

export default function SinglejobData() {
  return (
    <Box position="sticky" top="20px" border="1px solid grey" borderRadius='5px'>
      <Box1 />
      <Box2 />
    </Box>
  );
}
