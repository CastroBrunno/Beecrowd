let [A, B, C] = lines.shift().split(" ");

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

let numerosDec = [A, B, C]

numerosDec.sort(compararNumeros)

A = parseFloat(numerosDec[0])
B = parseFloat(numerosDec[1])
C = parseFloat(numerosDec[2])

if (A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO")
} else {
    if (Math.pow(A, 2) == ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {
        console.log("TRIANGULO RETANGULO")
    }
    if (Math.pow(A, 2) > ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {
        console.log("TRIANGULO OBTUSANGULO")
    }
    if (Math.pow(A, 2) < ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {
        console.log("TRIANGULO ACUTANGULO")
    }
    if (A == B && B == C) {
        console.log("TRIANGULO EQUILATERO")
    }
    if (A == B && B != C || B == C && C != A || A == C && B != C) {
        console.log("TRIANGULO ISOSCELES")
    }
}


function compararNumeros(a, b) {
    return b - a;
}