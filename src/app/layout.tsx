import localFont from "next/font/local";
import "@/style/globals.css";
import GlobalNavigation from "@/component/global/GlobalNavigation";
import GlobalFooter from "@/component/global/GlobalFooter";

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

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${pretendard.className} antialiased`}>
        <script dangerouslySetInnerHTML={{__html: themeScript}} />
        <GlobalNavigation />
        <main className="max-w-7xl m-auto px-4 md:px-5">
          { children }
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout