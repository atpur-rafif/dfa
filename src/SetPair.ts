export class SetPair<T extends string>{
    private value: {
        [K in T]?: {
            [J in T]?: boolean
        }
    } = {};

    add(p: T, q: T){
        if(!this.value[p]) this.value[p] = {};
        if(!this.value[q]) this.value[q] = {};
        this.value[p][q] = true;
        this.value[q][p] = true;
    }

    has(p: T, q: T){
        if(this.value[p] && this.value[p][q]) return true;
        else if(this.value[q] && this.value[q][p]) return true;
        else return false;
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