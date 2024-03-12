import classes from "./Header.module.css";

import { Button, Image, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import { GetOneStoreQuery } from "@/generated/graphql";

interface Props {
  data: GetOneStoreQuery;
}

export function Header({ data }: Props) {
  return (
    <>
      <div className={classes.cover}>
        <Image
          className={classes.image}
          src="https://placehold.co/1500x300"
          /* src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/e/AmazonStores/A13V1IB3VIYZZH/508442c2668b36595b2788a29e3eb19d.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg" */
          alt={data.getOneStore.name}
          width="100%"
          height="auto"
        />
      </div>
      <nav className={classes.navbar}>
        <div className={classes.profile}>
          <Image
            className={classes.image}
            src="https://placehold.co/75x75"
            /* src="https://m.media-amazon.com/images/S/abs-image-upload-na/7/AmazonStores/A13V1IB3VIYZZH/ee705f741d2cec073139e29b8cad0eb0.w400.h400._CR0%2C0%2C400%2C400_SX100_.jpg" */
            alt={data.getOneStore.name}
            style={{
              width: 75,
              height: "auto",
            }}
          />
        </div>
        <div className={classes.nav}>
          <div>
            <Text size="xs" c="gray">
              {data.getOneStore.name}
            </Text>
          </div>
          <div>
            <Button
              leftSection={<IconPlus size={14} />}
              variant="default"
              size="xs"
            >
              S&apos;abonner
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
