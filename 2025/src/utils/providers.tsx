"use client";
import { ChakraProvider, defaultConfig, defineConfig, createSystem, defineRecipe } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { config as wagmiConfig } from './wagmi';

const queryClient = new QueryClient();

const accordionRecipe = defineRecipe({
  base: {
    color: "yellow",
    _hover: {
      cursor: "pointer",
    },
  }
})

const fieldRecipe = defineRecipe({
  base: {
    color: "yellow",
    _hover: {
      cursor: "pointer",
    },
  },
})

const chakraConfig = defineConfig({
  globalCss: {
    body: {
      color: "dark",
      bg: "limestone",
      fontFamily: "'Roboto', sans-serif",
      "--chakra-colors-border": "dark",
    },
  },
  theme: {
    tokens: {
      colors: {
        limestone: { DEFAULT: { value: "#f3eeea" } },
        yellow: { DEFAULT: { value: "#e5a024" } },
        red: { DEFAULT: { value: "#cf4327" } },
        dark: { DEFAULT: { value: "#3b301b" } },
      },
    },
    recipes: {
      accordionitem: accordionRecipe,
      field: fieldRecipe,
    },
  },
})

const system = createSystem(chakraConfig, defaultConfig)

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <ThemeProvider attribute="class" disableTransitionOnChange>{props.children}</ThemeProvider>
      </RainbowKitProvider>
      </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  )
}