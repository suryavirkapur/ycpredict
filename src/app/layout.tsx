import { nav as Nav } from "@/c/nav";
import "@/s/global.css";

export const metadata = {
  title: "YC Predict",
  description: "will you get into yc?",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container">
        <Nav />
        {children}
      </body>
    </html>
  );
}
