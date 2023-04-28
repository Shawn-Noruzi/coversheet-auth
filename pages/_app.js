import { ToastProvider } from "react-toast-notifications";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "/public/fonts/fonts.css";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { rtlCache } from "../rtl-cache";

import "../styles/globals.scss";

import { SessionProvider } from "next-auth/react";
// do we need this? we're using next/link for client side routing anyways
// import { CustomNavigationClient } from "../src/utils/NavigationClient";
// interface contextInterface {
//   userName: string;
//   setUserName: Dispatch<SetStateAction<string>>;
// }

export default function MyApp({ Component, session, ...pageProps }) {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (ColorScheme) =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      <ColorSchemeProvider
        // colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          emotionCache={rtlCache}
          theme={{
            dir: "",
            colorScheme,
          }}
        >
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  );
}
