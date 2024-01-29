import type { Filter } from "../types";
import { getIndexer } from "../utils";
import { hexToRGBA } from "../utils";

const R = 0;
const G = 1;
const B = 2;
const A = 3;

type BorderOptions = {
  color: string;
};

export const Border: Filter<BorderOptions> = {
  name: "Border",
  apply: (pixels, width, height, options) => {
    const [r,g,b,a] = hexToRGBA(options.color);
    /* Modify pixels... */
    let getIndices = getIndexer(pixels,width,height);
    for (let row=0; row < height; row++) {
      for (let col=0; col<width; col++) {
        const indices = getIndices(row,col); // indices is position of RED,GREEn,BLUE,ALPHA
        let redValue = pixels[indices[R]]
       const borderwidth = width * 0.05
        // For example... take the top 175 rows
        if (row < borderwidth) {
          // and do something...
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        
        }
        if (col < borderwidth){ 
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        
        
        
        }
        if (row > height - borderwidth){
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        
        }
        if (col > width - borderwidth){
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        }
      }
    }
    return pixels;
    },
    options: [
      {
        name: "color",
        type: "color",
        default: "#ff0000",
      },
  ]
};
