import React from "react";
import { Image, Box, Flex, Icon, Text } from "@chakra-ui/react";
import sidenavLogo from "~/assets/logo/sidenav-logo.svg";
import { Link } from "@tanstack/react-location";
import { NavLinks } from "~/types/sidebar.types";
import tradeinsIcon from "~/assets/icons/tradeins-icon.svg";
import deviceListingsIcon from "~/assets/icons/devicelistings-icon.svg";
import manageAccountIcon from "~/assets/icons/manageaccount-icon.svg";

const navLinks: NavLinks[] = [
  {
    path: "/",
    title: "Trade-Ins",
    icon: <Image src={tradeinsIcon} />,
  },
  {
    path: "device-listings",
    title: "Device Listings",
    icon: <Image src={deviceListingsIcon} />,
  },
  {
    path: "manage-account",
    title: "Manage Account",
    icon: <Image src={manageAccountIcon} />,
  },
];

/**
 * Common Sidebar component for navigating the whole app
 */
const Sidebar = () => (
  <Flex minW={24} maxW={24} flexDir="column" bgColor="brand.500" h="100%">
    <Box bgColor="#0080BB" p="5">
      <Image src={sidenavLogo} />
    </Box>
    {navLinks.map(({ path, title, icon }) => (
      <Link to={path} key={title}>
        {({ isActive }) => (
          <Flex
            _hover={{
              bgColor: "brand.900",
              border: "none",
            }}
            borderBottom={!isActive ? "1px solid black" : "none"}
            color="white"
            bgColor={!isActive ? "brand.500" : "brand.900"}
            py="5"
            px="4"
            textAlign="center"
            justifyContent="center"
            fontSize="12px"
            alignItems="center"
            flexDir="column"
          >
            {icon}
            <Text mt="2">{title}</Text>
          </Flex>
        )}
      </Link>
    ))}
  </Flex>
);

export default Sidebar;
