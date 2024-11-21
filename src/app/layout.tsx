import type { Metadata } from "next";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "The Midwest Block-a-Thon",
  description: "A 20-hour hackathon presented by the KU Blockchain Institute",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap" rel="stylesheet">
      </link>
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
