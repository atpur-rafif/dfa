type DFAFunction<
    C extends readonly string[],
    S extends readonly string[]
> = {
    [K in C[keyof C] as string]: (S[keyof S])[]
}

export class DFA<
    C extends readonly string[], 
    S extends readonly string[]
>{
    constructor(
        character: C,
        state: S,
        deltaFunction: DFAFunction<C, S>,
        startState: S[keyof S],
        finalState: (S[keyof S])[]
    ){

    }
}