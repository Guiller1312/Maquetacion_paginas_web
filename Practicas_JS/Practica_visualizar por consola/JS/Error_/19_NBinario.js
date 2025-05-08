let num = 10;
let num2;
for (let i = 0; i < num; i++) {
    if (num > 1) {
        if (num % 2 == 0 && num != 2) {
            num2 = 1;

        } else {
            num2 = 0;
        }
    }
}
console.error(num2);