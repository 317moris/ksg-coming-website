import { Provider } from "@/components/ui/provider";
import { Inter } from "next/font/google";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={inter.variable} suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
