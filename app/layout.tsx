import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Store",
    description: "Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* NOTE: Make sure it is wrapped in the body element */}
            <body className={font.className}>
                <ModalProvider />
                <ToastProvider />
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
