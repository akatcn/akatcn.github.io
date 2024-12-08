import localFont from "next/font/local";
import "@/style/globals.css";

const pretendard = localFont({
  src: ".././style/fonts/PretendardVariable.woff2",
  weight: "100 900",
});

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${pretendard.className} antialiased`}>
        { children }
      </body>
    </html>
  );
}

export default RootLayout