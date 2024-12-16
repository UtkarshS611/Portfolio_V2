import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Utkarsh | Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: '/Favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="favicon" href="/Favicon.png" type="image/x-icon" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
