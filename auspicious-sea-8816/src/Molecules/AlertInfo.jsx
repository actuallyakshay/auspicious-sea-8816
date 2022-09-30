import { Alert, AlertIcon } from "@chakra-ui/react";

export default function AlertInfo() {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        Chakra is going live on August 30th. Get ready!
      </Alert>
    </>
  );
}
