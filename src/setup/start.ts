import { Reserved } from "setup/reservedMemoryPath";

export function start() {
    for (const key in Memory) {
        if(Object.values(Reserved).includes(key)) continue; 
        delete Memory[key];
    }



    Memory.active = true;
}

function initStatistics() {
    Memory.stats = {
        iterationStartAtMillis: Date.now(),
        iterationStartAtTick: Game.time,
        score: 0
    }
}