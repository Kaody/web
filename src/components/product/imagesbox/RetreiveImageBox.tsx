import { Image } from "@mantine/core";

import { getProductImage } from "@/actions/action";

interface Props {
  imagekeys: string[] | any;
}

export async function RetreiveImageBox({ imagekeys }: Props) {
  if (!imagekeys[0]) return null;
  const image = await getProductImage(imagekeys[0]);
  return (
    <Image
      src={image ? image.url : "https://placehold.co/200x200"}
      alt={image ? image.key : imagekeys}
      style={{ objectFit: "scale-down", height: "100%", width: "inherit" }}
    />
  );
}
