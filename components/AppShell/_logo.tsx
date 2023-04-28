import React from "react";
import { ColorScheme, Text } from "@mantine/core";
import Link from "next/link";

export function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <div className="flex cursor ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 623 163"
        width={30}
      >
        <path
          fill="#005db9"
          d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"
        />
      </svg>
      <Link href="/" style={{ color: "black!important" }}>
        <Text
          style={{
            color: "black",
            cursor:"pointer"
          }}
        >
          Portal
        </Text>
      </Link>
    </div>
  );
}
