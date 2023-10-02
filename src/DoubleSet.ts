class SetPair<T extends any[]>{
    private value: {
        [K in T[number]]?: {
            [J in T[number]]?: boolean
        }
    } = {};

    add(p: T, q: T){
        if(!this.value[p]) this.value[p] = {};
        if(!this.value[q]) this.value[q] = {};
        this.value[p][q] = true;
        this.value[q][p] = true;
    }

    remove(p: T, q: T){
        if(this.value[p][q]) delete this.value[p][q];
        if(this.value[q][p]) delete this.value[q][p];
    }

    toArray(){
        const r: ([T, T])[] = [];
        for(const [a, va] of Object.entries(this.value)){
            for(const [b, vb] of Object.entries(va)){
                if(vb){
                    const v = [a, b] as any;
                    r.push(v);
                }
            }
        }
        return r
    }
}