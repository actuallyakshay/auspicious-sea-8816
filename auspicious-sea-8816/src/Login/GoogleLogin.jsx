import React from "react";
import { Box, IconButton, Button, Text, Center } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { auth } from "../firebaseConfig/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function GoogleLogin() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider(auth);

  function handleSubmit() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log(result);
        // navigate('/');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert("something went wrong");
        // ...
      });
  }

  return (
    <Box>
      <Button
        onClick={handleSubmit}
        w={"full"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>Continue with Google</Text>
        </Center>
      </Button>
    </Box>
  );
}

export default GoogleLogin;
