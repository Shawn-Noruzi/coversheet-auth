import { IconUser, IconAd2 } from "@tabler/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  AppShell,
  Navbar,
  Header,
  Group,
  Space,
  useMantineColorScheme,
  Flex,
  Text,
  Drawer,
  useMantineTheme,
  Button,
  Divider,
  Modal,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MainLinks } from "./_mainLinks";
import { User } from "./_user";
import { Logo } from "./_logo";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
export const ApplicationContainer = ({ children }) => {
  const [openedNav, setOpenedNav] = useState(false);
  const { data: session, status } = useSession();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const router = useRouter();
  return (
    <>
      <AppShell
        padding="md"
        sx={(theme) => ({
          height: "100vh",
          background: "white",
        })}
        fixed={false}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!openedNav}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow mt="xs">
              <MainLinks />
              <Space h="md" />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={{ base: 70, md: 70 }} p="md">
            <Group sx={{ height: "100%" }} px={20} position="apart">
              <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Burger
                  opened={openedNav}
                  onClick={() => setOpenedNav((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <div>
                  <Logo colorScheme={colorScheme} />
                </div>
              </MediaQuery>

              {/* <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
            </ActionIcon> */}
              <User
                openDrawer={(value: boolean) => {
                  console.log("value", value);
                  if (value) {
                    setOpenedDrawer(value);
                  } else {
                    setOpenedDrawer((prev) => !prev);
                  }
                }}
              />
            </Group>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
      <Drawer
        opened={openedDrawer}
        onClose={() => setOpenedDrawer(false)}
        title="● Menu"
        padding="xl"
        styles={{
          title: { color: "white", fontSize: "24px" },
          header: { background: "#005db9", marginBottom: "20px" },
        }}
        size="xl"
        position="right"
      >
        <Flex
          justify={"space-between"}
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Flex
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            <IconUser />
            <Text fz="md">{session?.user?.name}</Text>
          </Flex>
          {/* <Text
            onClick={open}
            fz="md"
            color="red"
            style={{ cursor: "pointer" }}
          >
            Log Out
          </Text> */}
        </Flex>
        <Divider my="sm" size="xs" />
        <Modal opened={opened} onClose={close} title="Log Out" centered>
          <Text fz="md">{"Are you sure?"}</Text>
          <Space h="md" />

          <a
            className="signOut"
            onClick={async (e) => {
              await signOut({
                callbackUrl: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/auth/signout`,
              });

              setOpenedDrawer(false);
            }}
          >
            <Button color="red" uppercase fullWidth>
              Log Out
            </Button>
          </a>
        </Modal>

        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <IconAd2 />
          <a className={"buttonLink"} href="/admin/user-requests">
            User Requests
          </a>
        </Flex>
      </Drawer>
    </>
  );
};
