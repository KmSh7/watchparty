import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Providers from "@/redux/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="glb-font flex flex-col align-middle items-center">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Quicksand:wght@300..700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className="
      min-h-[100dvh]
     bg-black
     flex flex-col align-middle items-center
     relative
     container
     "
      >
        <Providers>
        <header id="headder"
          className="
      w-full
      h-auto
      max-w-500
      relative
      flex flex-col justify-center items-center
      "
        >
          <Navbar />
        </header>

        <main
          className="
          w-full
          text-white
          relative
          grow
      "
        >
          {children}
        </main>

        <footer
          className="
        w-full
        max-w-500
        relative
        bg-gray-500
        text-sm text-white text-center
        p-6
      "
        >
          <Footer />
        </footer>
        </Providers>
      </body>
    </html>
  );
}
