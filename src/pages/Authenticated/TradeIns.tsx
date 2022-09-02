import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Select,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { FilterTabType } from "~/types/tradeins.types";
import { useMatch, useNavigate, useSearch } from "@tanstack/react-location";
import { AuthenticatedLocationGenerics } from "~/types/location.types";
import { MdSearch } from "react-icons/md";
import TradeInTable from "~/components/TradeInTable";

const filterTabs: FilterTabType[] = [
  {
    title: "All",
    key: "All",
  },
  {
    title: "Completed",
    key: "Completed",
  },
  {
    title: "In Progress",
    key: "In Progress",
  },
  {
    title: "Rejected",
    key: "Rejected",
  },
];

const FilterTabs = () => {
  const search = useSearch<AuthenticatedLocationGenerics>();
  const navigate = useNavigate<AuthenticatedLocationGenerics>();
  const tabIndex = filterTabs.findIndex(
    (filter) => filter.key === search.tradeInStatus
  );

  const handleTabsChange = (tabIndex: number) => {
    const tradeInStatus = filterTabs[tabIndex].title;
    navigate({
      search: (old) => ({ ...old, tradeInStatus }),
      replace: true,
    });
  };

  return (
    <Tabs index={tabIndex || 0} colorScheme="black" onChange={handleTabsChange}>
      <TabList>
        {filterTabs.map(({ title }, index) => (
          <Tab key={title} color={index === tabIndex ? "black" : "gray.500"}>
            {title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

const TextSearch = () => {
  const search = useSearch<AuthenticatedLocationGenerics>();
  const navigate = useNavigate<AuthenticatedLocationGenerics>();

  const onSearch = (textQuery: string) => {
    navigate({
      search: (old) => ({ ...old, textQuery }),
      replace: true,
    });
  };

  return (
    <HStack>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<MdSearch color="gray.300" />}
        />
        <Input
          placeholder="Search"
          value={search?.textQuery || ""}
          onChange={(e) => onSearch(e.target.value)}
        />
        <InputRightElement w="100px">
          <Select>
            <option>All Items</option>
          </Select>
        </InputRightElement>
      </InputGroup>

      <Button colorScheme="brand" w="40">
        Search
      </Button>
    </HStack>
  );
};

const TradeIns = () => {
  const {
    data: { tradeIns },
  } = useMatch<AuthenticatedLocationGenerics>();
  return (
    <Stack spacing="6">
      <Heading fontWeight={600}>Trade-Ins</Heading>
      <Box>
        <FilterTabs />
      </Box>
      <Box>
        <TextSearch />
      </Box>
      <Box>
        <TradeInTable />
      </Box>
    </Stack>
  );
};

export default TradeIns;
