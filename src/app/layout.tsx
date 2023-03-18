import NavBar from "@/components/NavBar";
import { Provider } from "@/components/Provider/Provider";
import { Toaster } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "simplebar-react/dist/simplebar.min.css";
import { Inter } from "next/font/google";
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="flex flex-col min-h-screen antialiased bg-slate-50 dark:bg-slate-900">
        <Provider>
          {/* @ts-expect-error Server Component*/}
          <NavBar />
          <Toaster position="bottom-right" />
          <div className="grow">
          {children}
          </div>
          <Footer/>
        </Provider>
        {/* Allow for more height on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
