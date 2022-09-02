import React from "react";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";

const AppFooter = () => {
  return (
    <Box bg="brand.700" p="10">
      <SimpleGrid columns={4} spacing="4" w="70%" color="White">
        <Stack spacing={6}>
          <Text>
            <Link>Home</Link>
          </Text>
          <Text>
            <Link>Privacy Policy</Link>
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Text>
            <Link>About Us</Link>
          </Text>
          <Text>
            <Link>Terms {"&"} Conditions</Link>
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Text>
            <Link>How Does It Work</Link>
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Text>
            <Link>Contact Us</Link>
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default AppFooter;
