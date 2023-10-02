import { DFA } from "./DFA.ts";

export const L = new DFA(
    ["0", "1"] as const,
    ["A", "B"] as const,
    {
        "0": ["A", "A"],
        "1": ["A", "A"]
    },
    "A",
    ["B", "A"]
);