import { lightenColor, RGBtoString } from "../functions";
import { ThemeColors } from "../types";

const colors: ThemeColors = { 
    light: {
        primary: {}
    },
    dark: {
        primary: {}
    }
};

for (let amount = 0; amount <= 100; amount += 10) {
    const themes: Array<"light"|"dark"> = [ "light", "dark" ];
    const lightAmount = 1 - amount/100;
    const darkAmount = amount;
    
    themes.forEach((theme) => {
        const basePrimary = {
            light: { r: 76, g: 110, b: 228 },
            dark: { r: 43, g: 43, b: 43 }
        };
        
        colors[theme].primary[darkAmount] = RGBtoString(
            lightenColor(basePrimary[theme], lightAmount)
        );
    });
}

export default colors;