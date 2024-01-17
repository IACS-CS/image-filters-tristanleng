import type { Filter } from "../types";

export const inverted: Filter = {
  name: "Inverted Filter",
  apply: (pixels, width, height) => {
    for (let ri=0;ri<pixels.length;
      ri += 4){
      let gi = ri + 1;
      let bi = ri + 2;
      pixels[ri] = 255 - pixels [ri]
      pixels[gi] = 255 - pixels [gi]
      pixels[bi] = 255 - pixels [bi]
      }
    return pixels;
  },
};