import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./Theme";
import { FirebaseProvider } from "./Firebase";
import { UserProvider } from "./User";
import { AlertProvider } from "./Alert";

const ProviderCompose = (props: {
    providers: Array<Function>, 
    children: ReactNode
}) => (
    <>
        {props.providers.reduceRight((acc, Provider) => (
            <Provider>{acc}</Provider>
        ), props.children)}
    </>
);

export const MasterProvider = (props: { children: ReactNode }) => (
    <ProviderCompose providers={[
        SafeAreaProvider,
        ThemeProvider,
        FirebaseProvider,
        UserProvider,
        AlertProvider
    ]}>
        {props.children}
    </ProviderCompose>
);