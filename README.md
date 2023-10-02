# About
This repository made to find distinguishable and indistinguishable state in DFA. Use deno to run this code, so it won't need to be compiled from typescript into javascript file.

DFA object can be created by using `DFA` constructor. Then use `createDistinguishableTable` to check which state distinguishable or not. This function return string that can be printed into console. Below is one of example from `main.ts`.

```
B x 
C x x 
D   x x 
E x   x x 
F x x   x x 
G   x x   x x 
H x   x x   x x 
I x x   x x   x x 
  A B C D E F G H
```