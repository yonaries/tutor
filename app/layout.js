import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/app/theme";
import AuthChecker from "@/components/AuthChecker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PeerConnect Tutor",
  description: "PeerConnect Tutor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthChecker />
      <Toaster richColors position="top-right" />
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ background: "#FAF8F4" }}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
