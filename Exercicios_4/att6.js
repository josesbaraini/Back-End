const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (const key in pessoa) {
    console.log(`${key}:${pessoa[key]}`)
}