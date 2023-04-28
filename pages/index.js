import React from "react";
import Head from "next/head";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import { ApplicationContainer } from "../components/AppShell/ApplicationContainer";

//components

//style
import styles from "./Index.module.scss";

export default function index({loggedIn}) {
  return (
    <ApplicationContainer loggedIn={loggedIn}>
      <Head>
        {/* Title needs keywords, first 65 chars show only - 100 chars allowed
            meta description needs good phrase to draw in customers
        */}

        <title>Form Portal</title>
        <link rel="canonical" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <div className={styles.container}>
        <Box
          sx={(theme) => ({
            width: "30%",
            backgroundColor: "white",
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            margin: "20px",
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[1],
            },

            "@media (max-width: 960px)": {
              width: "100%",
            },
          })}
        >
          <Title color={"#101113"} align={"left"} order={3}>
            Sales
          </Title>
          <div className="flex buttonLinkContainer">
            <a
              className={styles.buttonLink}
              href="/sales/cover-sheet-supply-and-install"
            >
              Supply & Install - Intake
            </a>
            <a
              className={styles.buttonLink}
              href="/sales/cover-sheet-supply-only"
            >
              Supply Only - Intake
            </a>
          </div>
        </Box>
        <Box
          sx={(theme) => ({
            width: "30%",
            backgroundColor: "white",
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            margin: "20px",
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[1],
            },
            "@media (max-width: 960px)": {
              width: "100%",
            },
          })}
        >
          <Title color={"#101113"} align={"left"} order={3}>
            HR & Payroll
          </Title>
          <div className="flex flexDirectionCol">
            {/* <a className={styles.buttonLink} href="/hr-and-payroll/new-hire">
              New Hire
            </a> */}
            <a className={styles.buttonLink} href="/hr-and-payroll/share-price-form">
            Share Price Form
            </a>
          </div>
        </Box>
        <Box
          sx={(theme) => ({
            width: "30%",
            backgroundColor: "white",
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            margin: "20px",
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[1],
            },
            "@media (max-width: 960px)": {
              width: "100%",
            },
          })}
        >
          <Title color={"#101113"} align={"left"} order={3}>
            Project Management
          </Title>
          <div className="flex">
            <a className={styles.buttonLink} href="/project-management/project-acceptance-form">
              Project Acceptance Form
            </a>
          </div>
        </Box>
      </div>
    </ApplicationContainer>
  );
}

