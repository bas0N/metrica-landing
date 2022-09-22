import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const darkTheme = createTheme({
    type: "dark",
    theme: {},
  });
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });
  if ([`/form`].includes(appProps.router.pathname))
    return (
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          dark: darkTheme.className,
          light: lightTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    );

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
        light: lightTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
