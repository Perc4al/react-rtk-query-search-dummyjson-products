import React from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";
import OptionsPopover from "./settings/OptionsPopover";

function Header() {
  return (
    <Box align="center" p="4">
      <Flex justify="center" align="baseline" gap="2">
        <Heading style={{ color: "var(--accent-10)" }}>
          RTK Query - Search Products
        </Heading>
        <Heading size="1" style={{ color: "var(--gray-8)" }}>
          from DummyJSON
        </Heading>
        <OptionsPopover />
      </Flex>
    </Box>
  );
}

export default Header;
