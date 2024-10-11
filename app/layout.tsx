import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KS",
  description: "Friday nanaman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased *:p-5">
        <header className="relative w-fit">
          <p className="text-xl -mb-3 ml-1 lowercase">KNOWLEDGE SHARING</p>
          <h1 className="text-7xl leading-none font-sans">
            <span className="font-black">NEXTJS</span>
            &nbsp;<span className="italic">Server Actions</span>
          </h1>
          <div className="flex justify-end h-2 overflow-hidden w-auto bg-gradient-to-r from-red-500 to-yellow-300">
            <div className="bg-white rotate-[-55deg] h-full w-8" />
            <div className="bg-white rotate-[-55deg] h-full w-7" />
            <div className="bg-white rotate-[-55deg] h-full w-6" />
            <div className="bg-white rotate-[-55deg] h-full w-5" />
            <div className="bg-white rotate-[-55deg] h-full w-4" />
          </div>
        </header>
        {children}
        <footer className="sticky bottom-0 bg-white">
          <p className="text-right">
            Learn more about&nbsp;
            <a
              className="underline text-blue-500"
              target="_blank"
              rel="noreferrer"
              href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
            >
              Server Actions and Mutations here
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
