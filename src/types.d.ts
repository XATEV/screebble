// example declaration file - remove these and add your own custom typings

// memory extension samples
interface CreepMemory {
  role: string;
  room: string;
  working: boolean;
}

interface Memory {
  [arg: string]: any;
  uuid: number;
  log: any;
  stats: Statistics;
  active: boolean;
}

interface Statistics {
  iterationStartAtMillis: number;
  iterationStartAtTick: number;
  score: number;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}
