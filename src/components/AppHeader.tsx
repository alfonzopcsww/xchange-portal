import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import userIcon from "~/assets/logo/user-icon.svg";

const AppHeader = () => {
  return (
    <Flex
      minH="80px"
      shadow="base"
      alignItems="center"
      justifyContent="space-between"
      py="5"
      px="10"
    >
      <Box>ABC</Box>
      <Flex alignItems="center" color="gray.600">
        <Image src={userIcon} alt="icon" />
        <Text ml="2" fontWeight="600">
          Sample User
        </Text>
      </Flex>
    </Flex>
  );
};

export default AppHeader;
