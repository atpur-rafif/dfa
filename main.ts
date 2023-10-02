import { DFA } from "./src/DFA.ts";
import { L } from "./src/Declaration.ts";

function createDistingusishableTable<
    C extends readonly string[], 
    S extends readonly string[]
>(L: DFA<C, S>){
    const table:{
        [K in S[number]]?: {
            [L in S[number]]?: boolean
        }
    } = {};

    const stateCount = L.state.length;
    const finalState = L.finalStateSet;

    // Base case
    for(let i = 0; i < stateCount - 1; ++i){
        for(let j = 1; j < stateCount; ++j){
            const p = L.getStateByIndex(i);
            const q = L.getStateByIndex(j);
            if(
                finalState.has(p) != finalState.has(q)
            ){
                if(!table[p]) table[p] = {};
                if(!table[q]) table[q] = {};
                table[p][q] = true;
                table[q][p] = true;
            }
        }
    }

    // Recursive case

    console.log(table)
}

createDistingusishableTable(L);
