import {
  Box,
  Button,
  Popover,
  TextField,
  Heading,
  Flex,
  RadioGroup,
  Text,
} from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchQuery,
  setSearchFilterCategoryQuery,
} from "../features/searchSlice";
import { useGetCategoryListQuery } from "../features/productsApiSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(searchValue));
    dispatch(setSearchFilterCategoryQuery(searchCategory));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryChange = (value) => {
    setSearchCategory(value);
    setIsPopoverOpen(false);
    dispatch(setSearchQuery(searchValue || ""));
    dispatch(setSearchFilterCategoryQuery(value));
  };

  const { data: categoryList } = useGetCategoryListQuery();
  const displayEachCategory = categoryList?.map((category) => {
    return (
      <RadioGroup.Item key={category} value={category}>
        {category}
      </RadioGroup.Item>
    );
  });

  return (
    <Box align="center" p="4" style={{ width: "100%" }}>
      <TextField.Root
        size="3"
        placeholder="Search…"
        style={{ maxWidth: "600px" }}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="20" width="20" />
        </TextField.Slot>
        <TextField.Slot side="right">
          <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <Popover.Trigger>
              <Button size="2" variant="outline">
                <MixerHorizontalIcon />
                <Text>{searchCategory}</Text>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Flex direction="column" gap="4">
                <Heading size="2" style={{ color: "var(--accent-10)" }}>
                  Filter
                </Heading>
                <RadioGroup.Root
                  defaultValue="all"
                  value={searchCategory}
                  onValueChange={handleCategoryChange}
                >
                  <RadioGroup.Item value="all">all</RadioGroup.Item>
                  {displayEachCategory}
                </RadioGroup.Root>
              </Flex>
            </Popover.Content>
          </Popover.Root>
          <Button size="2" style={{ width: "90px" }} onClick={handleSearch}>
            SEARCH
          </Button>
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
}

export default SearchBar;
