import { RGB } from "../types";

export function lightenColor(rgb: RGB, inAmount: number): RGB {
    const keys: Array<"r"|"g"|"b"> = [ "r", "g", "b" ];
    
    keys.forEach((key) => {
        if (rgb[key] < 0 || rgb[key] > 255) {
            console.error(
                `ERROR: Invalid RGB color sent as input to function lightenColor.
                "${key}" must be within the range between 0 and 255. 
                Value passed: ${rgb[key]}`
            );
            return rgb;
        }
    });
    
    if (inAmount < 0 || inAmount > 1) {
        console.error(
            `ERROR: "inAmount" in function lightenColor must be within the range between 0 and 1. 
            Value passed: ${inAmount}`
        );
        return rgb;
    }
    
    return ({
        r: Math.min(255, rgb.r + 255 * inAmount),
        g: Math.min(255, rgb.g + 255 * inAmount),
        b: Math.min(255, rgb.b + 255 * inAmount)
    });
};