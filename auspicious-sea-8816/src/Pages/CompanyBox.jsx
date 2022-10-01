import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

let arr = [1, 2, 3, 4, 5];

export default function CompanyBox({elem}) {
  return (
    <>
        <Box  gap="4">
          <Flex w="fit-content" gap="4">
            <Image
              src={elem?.image}
              w="50px"
              h="50px"
              borderRadius="10px"
            />
            <Box >
            <Heading size="sm">{elem?.name}</Heading>
              <Flex alignItems="center" gap="3" mt="1">
                <Flex alignItems="center">
                  {arr.map((el, i) => {
                    return (
                      <StarIcon color={i < 3 ? "yellow.500" : "gray.300"} />
                    );
                  })}
                </Flex>
                <Text fontSize="14px" color="blue.600">
                 {elem?.rating}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex gap="12" mt="1" color="blackAlpha.700" fontSize="15px">
            <Text>Salaries</Text>
            <Text>Salaries</Text>
            <Text>Salaries</Text>
          </Flex>
        </Box>
    </>
  );
}
