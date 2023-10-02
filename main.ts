import { DFA } from "./src/DFA.ts";
import { L } from "./src/declaration.ts";

function createDistingusishableTable<
    C extends readonly string[], 
    S extends readonly string[]
>(L: DFA<C, S>){
    const table:{
        [K in `${S[number]}${S[number]}`]?: any
    } = {};

    const stateCount = L.state.length;

    // Base case
    for(let i = 0; i < stateCount - 1; ++i){
        for(let j = 1; j < stateCount; ++j){
            const p = L.getStateByIndex(i);
            const q = L.getStateByIndex(j);
            console.log(p, q);
        }
    }

    console.log(table);
}

createDistingusishableTable(L);
