"use client";

import classes from "./SearchByCategory.module.css";

import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { useState } from "react";

const categories = [
  "Toutes nos catégories",
  "High-Tech",
  "Beauté et Parfum",
  "Cuisine et Maison",
  "Epicerie",
];

export function SearchByCategory({ boxFocused }: { boxFocused: boolean }) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const { ref, focused } = useFocusWithin();

  const [value, setValue] = useState<string>(categories[0]);

  const options = categories.map((category) => (
    <Combobox.Option value={category} key={category}>
      {category}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target ref={ref}>
        <InputBase
          variant="unstyled"
          className={
            boxFocused
              ? classes.inputBoxFocused
              : focused
              ? classes.inputFocused
              : classes.input
          }
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || (
            <Input.Placeholder>Toutes nos catégories</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown miw="max-content">
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
