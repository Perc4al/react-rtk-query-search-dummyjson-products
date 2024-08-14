import { GearIcon } from "@radix-ui/react-icons";
import { Button, Flex, Popover, Text } from "@radix-ui/themes";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

function OptionsPopover({ appearance, setAppearance }) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="outline">
          <GearIcon height="20px" />
          <Text>Options</Text>
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Flex direction="column" gap="2">
          <DarkModeSwitch
            appearance={appearance}
            setAppearance={setAppearance}
          />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}

export default OptionsPopover;
