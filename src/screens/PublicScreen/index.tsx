import React from "react";
import { StyleSheet, Image } from "react-native";
import { Box, Text } from "@react-native-material/core";

import DarkThemeLogo from "../../assets/atos-logo-in-dark.png";

import { ThemeContext, ThemeValue } from "../../contexts/Theme";
import { ScreenProps } from "../../types";

export default function PublicScreen(props: ScreenProps) {
    const { theme, palette } = React.useContext(ThemeContext);
    const styles = getStyles({ theme, palette });
    
    return (
        <Box style={styles.outerBox}>
            <Box style={styles.innerBox}>
                <Image
                    source={{ uri: DarkThemeLogo }}
                    style={styles.logo}
                />
                <Text variant="h3" style={styles.title}>
                    Title
                </Text>
                <Text variant="h5" style={styles.subtitle}>
                    Subtitle
                </Text>
            </Box>
        </Box>
    );
};

const getStyles = ({ palette, theme }: Omit<ThemeValue, "toggleTheme">) => (
    StyleSheet.create({
        outerBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: palette.primary[100]
        },
        innerBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 10
        },
        logo: {
            position: "relative",
            width: 100,
            height: 80,
            opacity: 1,
            zIndex: 1,
            resizeMode: "contain"
        },
        title: {
            color: palette.primary[0],
            marginTop: 16
        },
        subtitle: {
            color: palette.primary[50],
            marginTop: 5
        }
    })
);