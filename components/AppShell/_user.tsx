import React, { useState, useEffect } from "react";
import { IconLayoutSidebarRightExpand, IconLogin } from "@tabler/icons";
import { signIn } from "next-auth/react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  MediaQuery,
} from "@mantine/core";

import { useSession } from "next-auth/react";

export function User({ openDrawer }) {
  const { data: session, status } = useSession();
  console.log("session:", session);

  const theme = useMantineTheme();

  return (
    <>
      <Box>
        <UnstyledButton
          sx={{
            display: "block",
            width: "100%",

            borderRadius: theme.radius.sm,
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
            },
          }}
        >
          {session && status === "authenticated" ? (
            <Group onClick={() => openDrawer()}>
              <Avatar src="" radius="xl" />
              <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ flex: 1, marginRight: "5px" }}>
                      <Text color={"#101113"} size="sm" weight={500}>
                        {session.user.name}
                      </Text>
                    </Box>
                    <IconLayoutSidebarRightExpand size={18} />
                  </div>
                </div>
              </MediaQuery>
            </Group>
          ) : null}
          {(session && status !== "authenticated") || session === null ? (
            <Group
              onClick={() => signIn("azure-ad", null, { prompt: "login" })}
            >
              <Avatar src="" radius="xl" />
              <Box sx={{ flex: 1 }}>
                <Text color={"#101113"} size="sm" weight={500}>
                  Sign In
                </Text>
              </Box>

              <IconLogin size={18} />
            </Group>
          ) : null}
        </UnstyledButton>
      </Box>
    </>
  );
}
