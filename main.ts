import { DFA } from "./src/DFA.ts";
import { L } from "./src/Declaration.ts";
import { SetPair } from "./src/SetPair.ts";

function createDistingusishableTable<
    C extends readonly string[], 
    S extends readonly string[]
>(L: DFA<C, S>){
    const table: SetPair<S[number]> = new SetPair();

    const charCount = L.character.length;
    const stateCount = L.state.length;
    const finalState = L.finalStateSet;

    // Base case
    for(let i = 0; i < stateCount - 1; ++i){
        for(let j = 1; j < stateCount; ++j){
            const p = L.getStateByIndex(i);
            const q = L.getStateByIndex(j);
            if(
                finalState.has(p) != finalState.has(q)
            ) table.add(p, q);
        }
    }
    console.log(table.toArray())

    // Recursive case
    while(true){
        let b = false;
        for(let i = 0; i < stateCount - 1; ++i){
            for(let j = 1; j < stateCount; ++j){
                const p = L.getStateByIndex(i);
                const q = L.getStateByIndex(j);
                if(table.has(p, q)) continue;

                for(let k = 0; k < charCount; ++k){
                    const c = L.character[k];
                    const r = L.next(p, c);
                    const s = L.next(q, c);
                    if(table.has(r, s) && !b){
                        table.add(p, q);
                        b = true;
                    };
                }
            }
        }
        if(!b) break;
    }

    console.log(table.toArray())
}

createDistingusishableTable(L);
