"use client";

import { Select } from "@mantine/core";

interface Props {
  quantity: number;
}

function Quantity({ quantity }: Props) {
  const range = Array.from({ length: quantity }, (_, i) => `${i + 1}`);

  return (
    <Select
      placeholder={`${quantity} disponible(s)`}
      checkIconPosition="right"
      data={range}
      defaultValue={range[0]}
      limit={5}
      searchable
      clearable
      nothingFoundMessage="Quantité non disponible"
      size="sm"
      type="number"
    />
  );
}

export default Quantity;
