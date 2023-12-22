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
			<body className="overflow-hidden">
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="flex flex-row">
						<NewNavbar />
						<div className="flex flex-col mt-8 ml-10">
							<h1 className="flex text-2xl border-2 border-green-500">Victim Notifications</h1>
							<Breadcrumb />
							<Divider className='my-4'/>
						</div>
					</div>
					<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
						{children}
					</main>
					<footer className="w-full flex items-center justify-center py-3">
					</footer>
				</Providers>
			</body>
		</html>
	);
}
