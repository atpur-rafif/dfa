import { DFA } from "./src/DFA.ts";
import { createDistingusishableTable } from "./src/Distinguishable.ts";

;export const L = new DFA(
    ["0", "1"] as const,
    ["A", "B", "C", "D", "E", "F", "G", "H"] as const,
    {
        "0": ["B", "G", "A", "C", "H", "C", "G", "G"],
        "1": ["F", "C", "C", "G", "F", "G", "E", "C"]
    },
    "A",
    ["C"]
);

export const M = new DFA(
    ["0", "1"] as const,
    ["A", "B", "C", "D", "E", "F", "G", "H", "I"] as const,
    {
        "0": ["B", "C", "D", "E", "F", "G", "H", "I", "A"],
        "1": ["E", "F", "H", "H", "I", "B", "B", "C", "E"]
    },
    "A",
    ["C", "F", "I"]
);

const resL = createDistingusishableTable(L);
console.log(resL);

console.log("\n");

const resM = createDistingusishableTable(M);
console.log(resM);

