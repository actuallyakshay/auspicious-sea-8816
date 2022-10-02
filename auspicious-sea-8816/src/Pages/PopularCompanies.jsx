import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import Footer from "../Organisms/Footer";
import CompanyBox from "./CompanyBox";

let companyData = [
  {
    companylink: "https://in.indeed.com/cmp/Exl",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_logo/07eaa8b687f6acf47e648b5ffa567105",
    name: "EXL",
    "css-73il1y href": "https://in.indeed.com/cmp/Exl/reviews",
    rating: "1,732 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Exl/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Exl/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Exl/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Samsung-Electronics-9",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/08f9772288de0157ee1f9a21f4ef38a0",
    name: "Samsung Electronics",
    "css-73il1y href":
      "https://in.indeed.com/cmp/Samsung-Electronics-9/reviews",
    rating: "8,602 reviews",
    "css-1s5eo7v href 2":
      "https://in.indeed.com/cmp/Samsung-Electronics-9/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Samsung-Electronics-9/faq",
    "css-1s5eo7v href 4":
      "https://in.indeed.com/cmp/Samsung-Electronics-9/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Deutsche-Bank",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/bcaa55ffe2abf43dd5af968419da22b9",
    name: "Deutsche Bank",
    "css-73il1y href": "https://in.indeed.com/cmp/Deutsche-Bank/reviews",
    rating: "3,114 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Deutsche-Bank/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Deutsche-Bank/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Deutsche-Bank/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Maersk",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/acfc069b6351c9d83b5b58e07ccb6f49",
    name: "Maersk",
    "css-73il1y href": "https://in.indeed.com/cmp/Maersk/reviews",
    rating: "2,826 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Maersk/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Maersk/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Maersk/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Ey",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/0ad968a5f25c45aeaac51671e6b83552",
    name: "EY",
    "css-73il1y href": "https://in.indeed.com/cmp/Ey/reviews",
    rating: "8,525 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Ey/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Ey/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Ey/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Bharti-Airtel-Limited",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/ccc8eb71443e7db104dc71c836778c21",
    name: "Bharti Airtel Limited",
    "css-73il1y href":
      "https://in.indeed.com/cmp/Bharti-Airtel-Limited/reviews",
    rating: "2,631 reviews",
    "css-1s5eo7v href 2":
      "https://in.indeed.com/cmp/Bharti-Airtel-Limited/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Bharti-Airtel-Limited/faq",
    "css-1s5eo7v href 4":
      "https://in.indeed.com/cmp/Bharti-Airtel-Limited/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Deloitte",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/f1692e34f4dc05559a0ccef2eea78b70",
    name: "Deloitte",
    "css-73il1y href": "https://in.indeed.com/cmp/Deloitte/reviews",
    rating: "10,912 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Deloitte/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Deloitte/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Deloitte/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Bny-Mellon",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/3d513b344140877b9b1281c470c57bca",
    name: "BNY Mellon",
    "css-73il1y href": "https://in.indeed.com/cmp/Bny-Mellon/reviews",
    rating: "4,938 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Bny-Mellon/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Bny-Mellon/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Bny-Mellon/jobs",
  },
  {
    companylink: "https://in.indeed.com/cmp/Hdfc-Bank",
    image:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c1e88bb71d075bbc247a2dd8ffeb4b75",
    name: "HDFC Bank",
    "css-73il1y href": "https://in.indeed.com/cmp/Hdfc-Bank/reviews",
    rating: "7,087 reviews",
    "css-1s5eo7v href 2": "https://in.indeed.com/cmp/Hdfc-Bank/salaries",
    "css-1s5eo7v href 3": "https://in.indeed.com/cmp/Hdfc-Bank/faq",
    "css-1s5eo7v href 4": "https://in.indeed.com/cmp/Hdfc-Bank/jobs",
  },
];

export default function PopularCompanies() {
  return (
    <Box w="80%" m="auto" mt="19">
      <Heading size="xl" color="blackAlpha.800">
        Find great places to work
      </Heading>
      <Text fontSize="xl" color="blackAlpha.700" mt="2">
        Get access to millions of company reviews
      </Text>
      <br />
      <br />
      <Box>
        <Heading as='ins' size="md" color="green">
          Popular companies
        </Heading>
        <br />
        <br />
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          rowGap={8}
        >
          {companyData?.map((elem) => {
            return (
              <>
                <CompanyBox elem={elem} />
              </>
            );
          })}
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <Image
        w="full"
        src="https://i.ibb.co/T8nj8GH/Screenshot-2022-10-01-203426.png"
      />
      <br />
      <br />
      <br />
      <Footer />
    </Box>
  );
}
