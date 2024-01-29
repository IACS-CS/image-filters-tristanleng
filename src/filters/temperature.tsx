import type { Filter } from "../types";

type MyFilterOptions = {
  
  strength: number;
  
};
export const temperature: Filter<MyFilterOptions> = {
  name: "Temperature Change",
  apply: (pixels, width, height, options) => {
    const temperature = 1.1; // You can adjust this value based on your requirement

    for (let i = 0; i < pixels.length; i += 4) {
        // Apply temperature filter logic
        pixels[i] = Math.min(255, pixels[i] * temperature * options.strength); // Red
        pixels[i + 1] = Math.min(255, pixels[i + 1] / temperature);
    }
    return pixels;
    
  },
  options : [
    {
      name: "strength",
      type: "number",
      default: 50,
      min: 0,
      max: 99999999,
    },
  ]
};