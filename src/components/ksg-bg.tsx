import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { Fragment, type JSX } from "react";

const rowStackKsg: { key: string; element: JSX.Element }[][][] = [];
for (let i = 0; i < 16; i++) {
	const rowKsg = [];
	for (let ii = 0; ii < 6; ii++) {
		const doubleKsg = [];
		for (let iii = 0; iii < 2; iii++) {
			doubleKsg.push({
				key: `ksg-bg-${i}-${ii}-${iii}`,
				element: (
					<Text fontSize="14rem" fontWeight="black" lineHeight={1} mx="6">
						KSG
					</Text>
				),
			});
		}
		rowKsg.push(doubleKsg);
	}
	rowStackKsg.push(rowKsg);
}

export default function KsgBg() {
	return (
		<Center
			flexDir="column"
			w="full"
			h="full"
			pos="absolute"
			overflow="hidden"
			userSelect="none"
		>
			<Box rotate="-45deg">
				{rowStackKsg.map((rowKsg, i) => (
					<HStack
						key={`row-stack-${rowKsg[0][0].key}`}
						color={`${(rowStackKsg.length / 2) < (i + 1) ? "green." : ""}fg/5`}
					>
						{rowKsg.map((ksgs) => (
							<HStack
								key={`row-${ksgs[0].key}`}
								animationName={`slide-to-${i % 2 === 0 ? "left" : "right"}-full`}
								animationIterationCount="infinite"
								animationTimingFunction="linear"
								animationDuration="60s"
							>
								{ksgs.map((ksg) => (
									<Fragment key={ksg.key}>{ksg.element}</Fragment>
								))}
							</HStack>
						))}
					</HStack>
				))}
			</Box>
		</Center>
	);
}
