import { MasterProvider } from "./src/contexts"
import Navigator from "./src/navigator";

export default function App() {
    return (
        <MasterProvider>
            <Navigator />
        </MasterProvider>
    );
};