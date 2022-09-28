import { Button } from "@chakra-ui/react";

export default function Pegination({ page, handleClick }) {
  return (
    <>
      <Button
        disabled={page === 1 ? true : false}
        onClick={() => handleClick(-1)}
      >
        Prev
      </Button>
      <Button>{page}</Button>
      <Button onClick={() => handleClick(1)}>next</Button>
    </>
  );
}
