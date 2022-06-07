import { Box, Text, Heading, Center } from "native-base";
import { ScreenProps } from "../../types";
import HomeScreen from "./HomeScreen";

export default function PublicScreen(props: ScreenProps) {
    return (
        <Box
            bg="primary.50"
            minWidth="100vw" 
            minHeight="100vh"
        >
            <Center>
                <Heading>
                    A componendsdt library for the{" "}
                    <Heading color="emerald.400">
                        React Ecosystem
                    </Heading>
                </Heading>
                <Text pt="3" fontWeight="md">
                    NativeBase is a simple, modular and accessible component library that
                    gives you building blocks to build you React applications.
                </Text>
            </Center>
        </Box>
    );
};