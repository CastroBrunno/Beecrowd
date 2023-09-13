let [A, B, C] = lines.shift().split(" "); 
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);

let maior = Math.max(A, B, C);

console.log(`${maior} eh o maior`);