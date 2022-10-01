import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        bg="gray.50"
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10} bg="gray.50">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
            <Stack align={"flex-start"}>
              <Link href={"#"}>Career Advice</Link>
              <Link href={"#"}>Browse Jobs</Link>
              <Link href={"#"}>Browse Companies</Link>
              <Link href={"#"}>Salaries</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Link href={"#"}>Indeed Events</Link>
              <Link href={"#"}>Work at Indeed</Link>
              <Link href={"#"}>Countries</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>ESG at Indeed</Link>
              <Link href={"#"}>Guidelines for Safe Job Search</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
              <Link href="https://apps.apple.com/us/app/indeed-job-search/id309735670">
                <Image
                  src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo-768x265.jpg"
                  width="150px"
                  height="47px"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.indeed.android.jobsearch&hl=en_IN&gl=US">
                <Image
                  src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge-300x89.png"
                  width="150px"
                />
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>© 2022 Indeed</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/indeed?lang=en"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={"https://www.youtube.com/user/indeedjobs"}
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={
                  "https://www.facebook.com/Indeed.co.in/?brand_redir=5944538380"
                }
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
