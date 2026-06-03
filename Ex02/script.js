let idades = [];

for (let i = 0; i < 7; i++) {
    idades[i] = Number(prompt(`Digite a idade da pessoa ${i + 1}: `));
}

alert("Posições das pessoas com mais de 25 anos:");

    for (let i = 0; i < 7; i++) {
    if (idades[i] > 25) {
        alert(`Posição ${i}`);
    }
}