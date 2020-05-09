import { ErrorMapper } from "utils/ErrorMapper";
import { start } from "setup/start";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`{right}{#7289da-fg}Tick: {#2c2f33-fg}[${Game.time}]`);

  if(Memory.active === undefined || Memory.active === false) {
    start();
  }
});