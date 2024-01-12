import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import NewNavbar from "@/components/NavBarNew";

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
							<h1 className="flex text-2xl ml-6 border-2 border-green-500">Victim Notifications</h1>
							<main className="container mx-auto max-w-7xl px-6 flex-grow">
								{children}
								<Analytics />
								<SpeedInsights />
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
