console.log(`Четвертая задача`);

let c1 = prompt('Первое число');
let c2 = prompt('Второе число');
let c3 = prompt('Третье число');
let r1 = 0;
let r2 = 0;
let r3 = 0;

if (c1 >= c2 & c1 >= c3) {
    if (c2 >= c3) {
        r1 = c1;
        r2 = c2;
        r3 = c3;
    }
    else {
        r1 = c1;
        r2 = c3;
        r3 = c2;
    }
} else if (c2 >= c1 & c2 >= c3) {
    if (c1 >= c3) {
        r1 = c2;
        r2 = c1;
        r3 = c3;
    } else {
        r1 = c2;
        r2 = c3;
        r3 = c1;
    }
} else if (c3 >= c1 & c3 >= c2) {
    if (c1 >= c2) {
        r1 = c3;
        r2 = c1;
        r3 = c2;
    } else {
        r1 = c3;
        r2 = c2;
        r3 = c1;
    }
}

console.log(r3, r2, r1);



