import { Stack, Skeleton, Container } from "@chakra-ui/react";

export default function Loading() {
  return (
      <Stack mt="20">
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
      </Stack>
  );
}
