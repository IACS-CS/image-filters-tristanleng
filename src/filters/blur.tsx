import type { Filter } from "../types";
import { hexToRGBA } from "../utils";

type MyFilterOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  blursize: number
};
export const Blur: Filter <MyFilterOptions> = {
  name: "Blur",
  apply: (pixels, width, height, options) => {
    /* Modify pixels... */
    return pixels;
  },
  options: [
    {
      name : 'blursize',
      type : 'integer',
      default: 20,
      min: 0
    },
  ]
};