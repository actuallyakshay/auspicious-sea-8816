import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export default function Pegination({ page, handleClick }) {
  return (
    <>
      <Button
        disabled={page === 1 ? true : false}
        onClick={() => handleClick(-1)}
        colorScheme="facebook"
        leftIcon={<ChevronLeftIcon />}
      >
        Prev
      </Button>
      <Button colorScheme="facebook">{page}</Button>
      <Button rightIcon={<ChevronRightIcon />} colorScheme="facebook" onClick={() => handleClick(1)}>
        next
      </Button>
    </>
  );
}
