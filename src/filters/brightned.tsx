import type { Filter } from "../types";

export const Brightner: Filter = {
  name: "More Brightness",
  apply: (pixels, width, height) => {
    for (let i = 0; i < pixels.length; i++) {
      pixels [i] = pixels [i] + 50;
    }
    return pixels;
  },
};