import { Center } from "native-base";
import { ScreenProps } from "../../types";

export default function AdminScreen(props: ScreenProps) {
    return (
        <Center>
            <Center 
                bg="primary.400" 
                _text={{
                    color: "white",
                    fontWeight: "bold"
                }} 
                height={200} 
                width={{
                    base: 200,
                    lg: 250
                }}
            >
                This is the Admin
            </Center>
        </Center>
    );
};