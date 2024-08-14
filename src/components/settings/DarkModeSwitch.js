import React, { useContext } from "react";
import * as Switch from "@radix-ui/react-switch";
import "./SwitchStyle.css";
import { Flex, Text } from "@radix-ui/themes";
import { DarkModeContext } from "../../context/DarkModeContext.js";

const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Flex gap="2" justify="end" align="center">
      <Text
        style={{
          color: "var(--accent-10)",
          marginRight: "8px",
        }}
      >
        Dark Mode
      </Text>
      <Switch.Root
        className="SwitchRoot"
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </Flex>
  );
};

export default DarkModeSwitch;
