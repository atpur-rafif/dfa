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
    character: C;
    state: S;
    deltaFunction: DFAFunction<C, S>;
    startState: S[number];
    finalState: (S[number])[];
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

        for(let i = 0; i < state.length; ++i){
            this.stateIndex[state[i]] = i;
        }
    }

    private getStateIndex(state: S[number]){
        return this.stateIndex[state];
    }

    next(currentState: S[number], inputChar: C[number]){
        let i = inputChar as any;
        let j = this.getStateIndex(currentState) as any;
        return this.deltaFunction[i][j];
    }
}