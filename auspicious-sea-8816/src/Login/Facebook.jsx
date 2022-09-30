import React from "react";
import { Box, IconButton,Button,Text,Center } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { auth } from "../firebaseConfig/firebaseConfig";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function FacebookLogin() {
  const navigate = useNavigate();
  const provider = new FacebookAuthProvider(auth);

  function handleSubmit() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
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
        const credential = FacebookAuthProvider.credentialFromError(error);
        alert("something went wrong");
        // ...
      });
  }

  return (
    <Box>
      {/* <IconButton onClick={handleSubmit} variant='outline' size='lg' icon={<ImFacebook2 color='#4267B2' size='28px' />} /> */}
      <Button
        onClick={handleSubmit}
        w={"full"}
        colorScheme={"facebook"}
        leftIcon={<FaFacebook />}
      >
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
      </Button>
    </Box>
  );
}

export default FacebookLogin;
