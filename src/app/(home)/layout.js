import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/otherPages/Sidebar";
import { Providers } from "../../GlobalRedux/provider";
import "../globals.css";

export const metadata = {
  title: "Pragatis Dashboard",
  description: "Pragati's is best e-learning play",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="user-select-none">
        <Providers>
          <div className="flex max-h-screen w-[100%] relative bg-white">
            <Sidebar />
            <div className="md:w-[85%] w-full md:ml-56 md:pl-6 ml-0">
              <div className="mb-[74px]">
                <Navbar />
              </div>
              <main className="w-full md:pb-2 pb-6"> {children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
