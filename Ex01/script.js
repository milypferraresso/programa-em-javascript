let idades = [];
let soma = 0;

for (let i = 0; i < 8; i++) {
    idades[i] = Number(prompt(`Digite a idade da pessoa ${i + 1}: `));
    soma += idades[i];
}

let media = soma / 8;
alert("Média de idade:"+ media);
for (let i = 0; i < 8; i++) {
    alert(`Posição ${i}: ${idades[i]}`);
}

alert(`Média das idades: ${media}`); 