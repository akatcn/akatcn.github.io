import localFont from "next/font/local";
import "@/style/globals.css";
import GlobalNavigation from "@/component/global/GlobalNavigation";
import GlobalFooter from "@/component/global/GlobalFooter";

const pretendard = localFont({
  src: ".././style/fonts/PretendardVariable.woff2",
  weight: "100 900",
});

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${pretendard.className} antialiased`}>
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