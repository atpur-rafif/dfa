import { DFA } from "./DFA.ts";

export const L = new DFA(
    ["0", "1"] as const,
    ["A", "B", "C", "D", "E", "F", "G", "H", "I"] as const,
    {
        "0": ["B", "C", "D", "E", "F", "G", "H", "I", "A"],
        "1": ["E", "F", "H", "H", "I", "B", "B", "C", "E"]
    },
    "A",
    ["C", "F", "I"]
);