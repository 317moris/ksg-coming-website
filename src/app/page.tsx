import { AbsoluteCenter, Box, Card, Icon, Link } from "@chakra-ui/react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import KsgBg from "@/components/ksg-bg";
import ProgressSurround from "@/components/progress-surround";

export default function Home() {
	return (
		<Box as="main" h="vh" colorPalette="green">
			<KsgBg />
			<ProgressSurround />
			<AbsoluteCenter p="4">
				<Card.Root variant="elevated" bg="bg/20" backdropFilter="blur(20px)">
					<Card.Header>
						<Card.Title>公開予定...</Card.Title>
					</Card.Header>
					<Card.Body>
						<Link href="https://ksg-h.spec.ed.jp" target="_blank">
							公式HP
							<Icon>
								<FaUpRightFromSquare />
							</Icon>
						</Link>
					</Card.Body>
				</Card.Root>
			</AbsoluteCenter>
		</Box>
	);
}
