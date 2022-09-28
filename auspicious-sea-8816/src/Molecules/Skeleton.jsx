import { Box, SkeletonText } from "@chakra-ui/react";



export default function Loading() {
    return (
        <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonText mt='4' noOfLines={14} spacing='4' />
        </Box>
    )
}