"use client"
import { ChakraProvider, defaultConfig, defineConfig, createSystem, defineRecipe } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

const accordionRecipe = defineRecipe({
  base: {
    color: "yellow",
    _hover: {
      cursor: "pointer",
    },
  }
})

const config = defineConfig({
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
    },
  },
})

const system = createSystem(config, defaultConfig)

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}