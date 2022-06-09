import { StyleSheet } from "react-native";
import { ThemeValue } from "../../contexts/Theme";

const useStyles = ({ palette, theme }: Omit<ThemeValue, "toggleTheme">) => (
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
        appName: {
            fontSize: 20,
            color: palette.primary[0],
            marginTop: 16
        },
        catchline: {
            fontSize: 17,
            color: palette.primary[50],
            marginTop: 5,
            marginBottom: 16
        },
        button: {
            width: "50%"
        }
    })
);

export default useStyles;