import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import { Brightner } from "./brightned";
import { inverted } from "./invert";
import { Border } from "./_templateRowCol";
const filters: Filter[] = [
  inverted,
  Border,
  Brightner,
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
];

export default filters;
