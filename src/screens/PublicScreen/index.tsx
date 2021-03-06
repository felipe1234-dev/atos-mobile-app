import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Box, Text, Button, HStack } from "@react-native-material/core";

import ATOSLogo from "../../assets/atos-logo-in-dark.png";
import useStyles from "./useStyles";
import { ThemeContext } from "../../contexts/Theme";
import { ScreenProps } from "../../types";
import { app } from "../../constants";

export default function PublicScreen(props: ScreenProps) {
    const { theme, palette } = React.useContext(ThemeContext);
    const styles = useStyles({ theme, palette });
    
    return (
        <Box style={styles.outerBox}>
            <Box style={styles.innerBox}>
                <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(app.websiteURL)}>
                    <Image
                        source={{ uri: ATOSLogo }}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <Text variant="h3" style={styles.appName}>
                    {app.name}
                </Text>
                <Text variant="h5" style={styles.catchline}>
                    {app.catchline}
                </Text>
                <HStack fill center spacing={13}>
                    <Button
                        color={palette.primary[0]}
                        tintColor={palette.primary[100]}
                        title="Entrar"
                        disableElevation
                        uppercase={false}
                        style={styles.button}
                    />
                    <Button 
                        color={palette.primary[0]}
                        tintColor={palette.primary[100]}
                        title="Cadastrar"
                        disableElevation
                        uppercase={false}
                        style={styles.button}
                    />
                </HStack>
            </Box>
        </Box>
    );
};