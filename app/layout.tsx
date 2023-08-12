import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/globals.css";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Effective Prompt App',
  description: 'Discover & Share AI Prompts"',
  icons: {
    icon: {
      url: "/assets/images/logo.svg",
      type: "image/svg",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
