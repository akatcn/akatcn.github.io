import localFont from "next/font/local";
import "@/style/globals.css";
import GlobalNavigation from "@/component/global/GlobalNavigation";
import GlobalFooter from "@/component/global/GlobalFooter";
import { Metadata } from "next";

const pretendard = localFont({
  src: ".././style/fonts/PretendardVariable.woff2",
  weight: "100 900",
});

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

const themeScript = `(function() {
  const updateTheme = (theme) => {
    switch (theme) {
      case "light":
        document.documentElement.setAttribute("data-theme", "light")
        break
      case "dark":
        document.documentElement.setAttribute("data-theme", "dark")
        break
    }
  }

  let preferredTheme = localStorage.getItem("theme")
  let initialTheme = preferredTheme;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  if (initialTheme === null) {
    initialTheme = darkQuery.matches ? "dark" : "light"
  }

  updateTheme(initialTheme)

  darkQuery.addEventListener('change', (e) => {
    if (preferredTheme === null) {
      updateTheme(e.matches ? 'dark' : 'light')
    }
  })
}())`

export const metadata: Metadata = {
  title: "YHSpace",
  description: "프론트엔드 개발자 이용훈의 공간",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon1.ico",
        href: "/icon1.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon2.ico",
        href: "/icon2.ico",
      }
    ]
  }
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="bg-absent text-secondary dark:scheme-dark scroll-smooth h-full">
      <body className={`${pretendard.className} antialiased h-full flex flex-col`}>
        <script dangerouslySetInnerHTML={{__html: themeScript}} />
        <GlobalNavigation />
        <main className="w-full max-w-7xl m-auto px-4 md:px-5 flex-1">
          { children }
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout