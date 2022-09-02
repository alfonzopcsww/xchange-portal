import { FC, PropsWithChildren } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import leftBg from "~/assets/images/login-left-bg.png";
import pcsLogo from "~/assets/logo/pcs-logo.svg";
import xchangeLogo from "~/assets/logo/xchange-logo.svg";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export const UnAuthenticatedPageContainer: FC<PropsWithChildren> = ({
  children,
}) => (
  <Flex h="100vh" display="flex">
    <Image src={leftBg} alt="phone" h="100vh" />
    <Flex p="16" flex="1" flexDir="column">
      <Box>
        <div>
          <Image src={pcsLogo} alt="pcs-logo" />
          <Image src={xchangeLogo} alt="xchange-logo" />
        </div>
      </Box>
      <Box flex="1">{children}</Box>
    </Flex>
  </Flex>
);

export const AuthenticatedPageContainer: FC<PropsWithChildren> = ({
  children,
}) => (
  <Flex minH="100vh" maxHeight="100vh" display="flex">
    <Box>
      <Sidebar />
    </Box>
    <Flex flex="1" flexDir="column" overflow="auto">
      <Box>
        <AppHeader />
      </Box>
      <Box flex="1" p="10" overflow="auto">
        {children}
      </Box>
      <Box>
        <AppFooter />
      </Box>
    </Flex>
  </Flex>
);
