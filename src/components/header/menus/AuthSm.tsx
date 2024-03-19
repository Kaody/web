"use client";

import {
  Button,
  Flex,
  Group,
  Popover,
  Skeleton,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

import LogoutButton from "@/components/logout.button";
import { MeQuery } from "@/generated/graphql";

interface Props {
  data: MeQuery | undefined;
  loading: boolean;
}

export function AuthSm({ data, loading }: Props) {
  const router = useRouter();
  return (
    <>
      <Popover
        withArrow
        position="bottom-start"
        arrowPosition="side"
        shadow="md"
        clickOutsideEvents={["mouseup", "touchend"]}
      >
        <Popover.Target>
          <UnstyledButton visibleFrom="sm">
            <Group gap={2}>
              <Flex direction="column" justify="center">
                <Flex align="baseline">
                  <Text size="xs" c="var(--mantine-color-gray-2)">
                    Bonjour,&nbsp;
                  </Text>
                  {loading ? (
                    <Skeleton radius={0} height={8} w={75} />
                  ) : (
                    <Text truncate size="xs" c="var(--mantine-color-gray-2)">
                      {data ? data.me.first_name : "Identifiez-vous"}
                    </Text>
                  )}
                </Flex>
                <Text c="var(--mantine-color-white)" fw="bolder" size="xs">
                  Compte et listes
                </Text>
              </Flex>
            </Group>
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown>
          {loading ? (
            <Flex direction="column" gap={2}>
              <Skeleton height={24} w={175} />
              <Skeleton height={12} w={100} />
            </Flex>
          ) : data ? (
            <LogoutButton />
          ) : (
            <Flex direction="column" gap={2}>
              <Button size="xs" onClick={() => router.push("/auth/login")}>
                Identifiez-vous
              </Button>
              <Text size="xs">
                Nouveau client ?{" "}
                <Link
                  href="/auth/register"
                  style={{
                    color: "var(--mantine-color-secondary-0)",
                    textDecoration: "underline",
                  }}
                >
                  Commencer ici.
                </Link>
              </Text>
            </Flex>
          )}
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
