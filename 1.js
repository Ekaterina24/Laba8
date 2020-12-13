console.log(`Первая задача`);

let a = prompt('Введите число ');
let str = "";

for (let i = 1; i <= a; i++) {
    str = str + `${i} овечка...`;
}
console.log(str);