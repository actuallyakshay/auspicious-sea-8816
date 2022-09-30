import { Badge, Box, Flex, Text } from "@chakra-ui/react";

export default function JobFeed() {
  return (
    <>
      <Flex justifyContent="center">
        <Text
          fontSize="xl"
          px={20}
          py="5"
          fontWeight="bold"
          borderBottom="4px solid navy"
        >
          Job feed
          <Badge
            py="2"
            ml="3"
            variant="solid"
            fontSize="0.8em"
            colorScheme="gray"
          >
            New
          </Badge>
        </Text>
      </Flex>
    </>
  );
}
