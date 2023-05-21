import ModalProvider from "@/contexts/modal.context";
import "../styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recosecha",
  description: "Conectando el campo y la ciudad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ModalProvider>
        <body className={inter.className}>{children}</body>
      </ModalProvider>
    </html>
  );
}
