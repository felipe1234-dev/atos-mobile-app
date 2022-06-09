import React from "react";
import { StyleSheet, Image } from "react-native";
import { Box, Text } from "@react-native-material/core";

import ATOSLogo from "../../assets/atos-logo-in-dark.png";
import { ThemeContext, ThemeValue } from "../../contexts/Theme";
import { ScreenProps } from "../../types";
import { app } from "../../constants";

export default function PublicScreen(props: ScreenProps) {
    const { theme, palette } = React.useContext(ThemeContext);
    const styles = getStyles({ theme, palette });
    
    return (
        <Box style={styles.outerBox}>
            <Box style={styles.innerBox}>
                <Image
                    source={{ uri: ATOSLogo }}
                    style={styles.logo}
                />
                <Text variant="h3" style={styles.appName}>
                    {app.name}
                </Text>
                <Text variant="h5" style={styles.catchline}>
                    {app.catchline}
                </Text>
            </Box>
        </Box>
    );
};