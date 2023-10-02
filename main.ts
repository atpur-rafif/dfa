import { DFA } from "./src/DFA.ts";
import { L, M } from "./src/Declaration.ts";
import { SetPair } from "./src/SetPair.ts";

function createDistingusishableTable<
    C extends readonly string[], 
    S extends readonly string[]
>(L: DFA<C, S>): string{
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

    let res = "";
    for(let i = 1; i < stateCount; ++i){
        res += L.getStateByIndex(i) + " ";
        for(let j = 0; j < Math.min(stateCount - 1, i); ++j){
            const p = L.getStateByIndex(i);
            const q = L.getStateByIndex(j);
            if(table.has(p, q)) res += "x ";
            else res += "  ";
        }
        res += "\n";
    }

    res += "  ";
    for(let i = 0; i < stateCount - 1; ++i){
        res += L.getStateByIndex(i) + " ";
    }

    return res;
}

const res = createDistingusishableTable(M);
console.log(res);
