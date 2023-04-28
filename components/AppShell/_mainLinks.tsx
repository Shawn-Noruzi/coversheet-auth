import React, { useState, useEffect } from "react";
import {
  IconAd2,
  IconList,
  IconArrowDownRight,
  IconDatabase,
} from "@tabler/icons";
import { useRouter } from "next/router";
// @ts-ignore
import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  Anchor,
  Collapse,
} from "@mantine/core";
import Link from "next/link";
type subLinkType = { subUrl: string; subText: string };

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url: string;
  subLinkData: Array<subLinkType>;
}

function MainLink({ icon, color, label, url, subLinkData }: MainLinkProps) {
  const router = useRouter();

  const [openedSales, setOpenedSales] = useState(false);
  const [openedGeneral, setOpenedGeneral] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);

  useEffect(() => {
    if (
      router.asPath ===
        subLinkData.find((a) => a?.subUrl === "/cover-sheet-supply-and-install")
          ?.subUrl ||
      router.asPath ===
        subLinkData.find((a) => a.subUrl === "/cover-sheet-supply-only")?.subUrl
    ) {
      setOpenedSales(true);
    }
    if (
      router.asPath ===
      subLinkData.find((a) => a?.subUrl === "/new-hire")?.subUrl
    ) {
      setOpenedGeneral(true);
    }
  }, [router.asPath]);

  return (
    <div
      onMouseEnter={() => setHoveredMenu(true)}
      onMouseLeave={() => setHoveredMenu(false)}
    >
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Link href={url}>
          <Group>
            <ThemeIcon color={color} variant="light">
              {icon}
            </ThemeIcon>

            <Text color={"#101113"} size="sm">
              {label}
            </Text>
          </Group>
        </Link>
      </UnstyledButton>
      <Collapse in={openedSales || openedGeneral || hoveredMenu}>
        {subLinkData.map((a, index) => {
          return (
            <Anchor
              key={index}
              sx={(theme) => ({
                padding: "5px  15px 5px 8px",
                color: "grey",
                background: "#f1f1f1",
                marginTop: "5px",
              })}
              className="flex subLink"
              href={a.subUrl}
            >
              <IconArrowDownRight size={16} />
              <Text
                color={"#101113"}
                size="sm"
                fw={router.asPath === a.subUrl ? 700 : 0}
                ml={"sm"}
              >
                {a.subText}
              </Text>
            </Anchor>
          );
        })}
      </Collapse>
    </div>
  );
}

const data = [
  {
    icon: <IconAd2 size={16} />,
    color: "blue",
    label: "Sales",
    url: "/sales",
    subLinkData: [
      {
        subUrl: "/sales/cover-sheet-supply-and-install",
        subText: " Supply & Install",
      },
      { subUrl: "/sales/cover-sheet-supply-only", subText: "Supply Only" },
    ],
  },

  {
    icon: <IconAd2 size={16} />,
    color: "blue",
    label: "HR & Payrolls",
    url: "/hr-and-payroll",
    subLinkData: [
      // {
      //   subUrl: "/hr-and-payroll/new-hire",
      //   subText: " New Hire",
      // },
      {
        subUrl: "/hr-and-payroll/share-price-form",
        subText: " Share Price Form",
      },
    ],
  },

  {
    icon: <IconAd2 size={16} />,
    color: "blue",
    label: "Project Management",
    url: "/project-management",
    subLinkData: [
      {
        subUrl: " /project-management/project-acceptance-form",
        subText: " Project Acceptance Form",
      },
    ],
  },
 
  // { icon: <IconAlertCircle size={16} />, color: "teal", label: "Dept 2" },
  // { icon: <IconMessages size={16} />, color: "violet", label: "Dept 3" },
  // { icon: <IconDatabase size={16} />, color: "grape", label: "Dept 4" },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
