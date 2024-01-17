import type { Filter } from "../types";
import { getIndexer } from "../utils";

const R = 0;
const G = 1;
const B = 2;
const A = 3;

export const Border: Filter = {
  name: "Border",
  apply: (pixels, width, height) => {
    /* Modify pixels... */
    let getIndices = getIndexer(pixels,width,height);
    for (let row=0; row < height; row++) {
      for (let col=0; col<width; col++) {
        const indices = getIndices(row,col); // indices is position of RED,GREEn,BLUE,ALPHA
        let redValue = pixels[indices[R]]
        // For example... take the top 175 rows
        if (row < 175) {
          // and do something...
          pixels[indices[R]] = 0;
          pixels[indices[G]] = 0;
          pixels[indices[B]] = 0;
        
        }
        if (col < 175){
          pixels[indices[R]] = 0;
          pixels[indices[G]] = 0;
          pixels[indices[B]] = 0;
        
        
        
        }
        if (row < 175){
          pixels[indices[R]] = 0;
          pixels[indices[G]] = 0;
          pixels[indices[B]] = 0;
        
        }
      }
    }
    return pixels;
  },
};
