import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenProps } from "../types";
import { RequireAuth } from "../components";
import { default as Public } from "../screens/PublicScreen";
import AdminScreen from "../screens/AdminScreen";

const Stack = createNativeStackNavigator();

const Admin = (props: ScreenProps) => (
    <RequireAuth {...props}>
        <AdminScreen {...props} />
    </RequireAuth>
);

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Public"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Public"
                    component={Public}
                />
                <Stack.Screen
                    name="Admin"
                    component={Admin}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};