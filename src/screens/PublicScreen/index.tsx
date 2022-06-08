import React from "react";
import { StyleSheet, Image } from "react-native";
import { Avatar, Box, Text } from "@react-native-material/core";

import DarkThemeLogo from "../../assets/atos-logo-in-dark.png";
import LightThemeLogo from "../../assets/atos-logo-in-light.png";

import { ThemeContext, ThemeValue } from "../../contexts/Theme";
import { ScreenProps } from "../../types";

export default function PublicScreen(props: ScreenProps) {
    const { theme, palette } = React.useContext(ThemeContext);
    
    return (
        <Box style={styles({ theme, palette }).outerBox}>
            <Box style={styles({ theme, palette }).innerBox}>
                <Image
                    source={{ uri: DarkThemeLogo }}
                    style={styles({ theme, palette }).logo}
                />
            </Box>
        </Box>
    );
};

const styles = ({ palette, theme }: Omit<ThemeValue, "toggleTheme">) => (
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
        }
    })
);