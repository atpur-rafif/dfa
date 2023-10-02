type DFAFunction<
    C extends readonly string[],
    S extends readonly string[]
> = {
    [K in C[number] as string]: (S[number])[]
}

export class DFA<
    C extends readonly string[] = string[], 
    S extends readonly string[] = string[]
>{
    character: C;
    state: S;
    deltaFunction: DFAFunction<C, S>;
    startState: S[number];
    finalState: (S[number])[];
    finalStateSet: Set<S[number]>;
    stateIndex: {
        [K in S[number]]: number
    } = {} as any;

    constructor(
        character: C,
        state: S,
        deltaFunction: DFAFunction<C, S>,
        startState: S[number],
        finalState: (S[number])[]
    ){
        this.character = character;
        this.state = state;
        this.deltaFunction = deltaFunction;
        this.startState = startState;
        this.finalState = finalState;
        this.finalStateSet = new Set(finalState);

        for(let i = 0; i < state.length; ++i){
            this.stateIndex[state[i]] = i;
        }
    }

    getIndexByState(state: S[number]){
        return this.stateIndex[state];
    }

    getStateByIndex(i: number){
        return this.state[i];
    }

    next(currentState: S[number], inputChar: C[number]){
        let i = inputChar;
        let j = this.getIndexByState(currentState);
        return this.deltaFunction[i][j];
    }
}