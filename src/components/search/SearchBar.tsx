import classes from "./SearchBar.module.css";

import { ActionIcon, Box, BoxProps, Flex, Group, Input } from "@mantine/core";
import {
  IconMicrophone,
  IconPhotoSensor,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";

import { SearchByCategory } from "@/components/category";

export function SearchBar(props: BoxProps) {
  const [focused, setFocused] = useState(false);
  return (
    <Box
      flex={1}
      className={focused ? classes.boxFocused : classes.box}
      {...props}
    >
      <Group gap={0}>
        <SearchByCategory boxFocused={focused} />
        <Input
          flex={1}
          variant="unstyled"
          placeholder="Rechercher sur Tsenamilay.mg"
          rightSectionPointerEvents="visible"
          rightSectionWidth={55}
          style={{
            height: 40,
            backgroundColor: "var(--mantine-color-white)",
            border: "3px solid var(--mantine-color-white)",
          }}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          rightSection={
            <Flex>
              <ActionIcon
                variant="transparent"
                size="sm"
                aria-label="Image search"
              >
                <IconPhotoSensor />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                size="sm"
                aria-label="Image search"
              >
                <IconMicrophone />
              </ActionIcon>
            </Flex>
          }
        />
        <ActionIcon
          radius={0}
          style={{
            borderTopRightRadius: focused
              ? ""
              : "var(--mantine-radius-default)",
            borderBottomRightRadius: focused
              ? ""
              : "var(--mantine-radius-default)",
          }}
          h={40}
          w={40}
        >
          <IconSearch />
        </ActionIcon>
      </Group>
    </Box>
  );
}
