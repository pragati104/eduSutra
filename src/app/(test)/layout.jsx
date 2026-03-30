import { Providers } from "@/GlobalRedux/provider";
import "@/app/globals.css";
import TestFooter from "@/components/testPage/testDetails/TestFooter";
import TestNavbar from "@/components/testPage/testDetails/TestNavbar";

export const metadata = {
  title: "Test",
  description: "Best Test Platform",
};

export default function TestLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className=" flex flex-col w-[100%] h-screen  bg-white">
            <TestNavbar />
            {children}
            <TestFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
