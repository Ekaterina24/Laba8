console.log(`Пятая задача`);
let mas = [];
for (let i = 0; i <= 4; i++) {
    mas.push(prompt('Введите число'));
}

console.log(mas);

for (let i = 0; i < mas.length - 1; i++) {
    for (let j = 0; j < mas.length - 1 - i; j++) {
        if (mas[j] > mas[j + 1]) {
            const k = mas[j];
            mas[j] = mas[j + 1];
            mas[j + 1] = k;
        }
    }
}

console.log(mas[4]);



