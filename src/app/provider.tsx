"use client"
import { ChakraProvider, defaultSystem, defaultConfig, defineConfig, createSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

const config = defineConfig({
  globalCss: {
    body: {
      color: "dark",
      bg: "limestone",
      fontFamily: "Roboto, sans-serif",
    },
  },
  theme: {
    tokens: {
      colors: {
        limestone: "#d7d2cb",
        yellow: "#e5a024",
        red: "#cf4327",
        dark: "#3b301b",
      },
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