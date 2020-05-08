// example declaration file - remove these and add your own custom typings

// memory extension samples
interface CreepMemory {
  role: string;
  room: string;
  working: boolean;
}

interface Memory {
  uuid: number;
  log: any;
  stats: {name: Statistics};
}

interface Statistics {
  iterationStartAt: number;
  score: number;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}
