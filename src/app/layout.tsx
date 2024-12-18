import Provider from "../utils/provider";
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap" rel="stylesheet" />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
