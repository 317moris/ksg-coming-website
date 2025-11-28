"use client";

import { Box, ClientOnly, Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ProgressSurround() {
	const [sec, setSec] = useState(0);

	useEffect(() => {
		function set() {
			setSec(new Date().getSeconds());
		}
		set();
		const interval = setInterval(set, 1000);

		return () => clearInterval(interval);
	}, []);

	const progressProps = {
		shape: "square" as const,
		defaultValue: 0,
		value: sec,
		max: 60,
		striped: true,
		animated: true,
		pos: "fixed",
		h: "3",
	};

	return (
		<ClientOnly>
			<Box animationName="fade-in" animationDuration="slow">
				<Progress.Root {...progressProps} top="0" w="full">
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress.Root>
				<Progress.Root
					{...progressProps}
					right="0"
					orientation="vertical"
					w="3"
					h="full"
					pt="3"
				>
					<Progress.Track h="full">
						<Progress.Range />
					</Progress.Track>
				</Progress.Root>
				<Progress.Root
					{...progressProps}
					bottom="0"
					rotate="180deg"
					w="full"
					pl="3"
				>
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress.Root>
				<Progress.Root
					{...progressProps}
					left="0"
					orientation="vertical"
					rotate="180deg"
					w="3"
					h="full"
					py="3"
				>
					<Progress.Track h="full">
						<Progress.Range />
					</Progress.Track>
				</Progress.Root>
			</Box>
		</ClientOnly>
	);
}
