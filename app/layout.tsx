import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
// import { Navbar } from "@/archive/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Navbar from "@/archive/Navbar";
import NewNavbar from "@/components/NavBarNew";
import Breadcrumb from "@/components/Breadcrumbs";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";

export const metadata: Metadata = {
	title: 'Victim Notifications v2',
	description: 'MVP for Victim Notifications'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="flex flex-row w-screen">
						<NewNavbar />
						<div className="flex flex-col mt-8 ml-10 mr-40 w-screen">
							<h1 className="flex text-2xl border-2 border-green-500">Victim Notifications</h1>
							<main className="container mx-auto max-w-7xl px-6 flex-grow">
								{children}
							</main>
						</div>
					</div>
					<footer className="w-full flex items-center justify-center py-3">
					</footer>
				</Providers>
			</body>
		</html>
	);
}
