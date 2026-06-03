let numeros = [];

for (let i = 0; i < 15; i++) {
    numeros[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

alert("Vetor completo:");

for (let i = 0; i < 15; i++) {
    alert(`Posição ${i}: ${numeros[i]}`);
}

alert("\nPosições com valores múltiplos de 10:");

for (let i = 0; i < 15; i++) {
    if (numeros[i] % 10 === 0) {
        alert(`Posição ${i} -> Valor ${numeros[i]}`);
    }
}