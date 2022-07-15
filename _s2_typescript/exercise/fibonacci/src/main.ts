
function isFibonacci(number:number) {
    let number1 = 0;
    let number2 = 1;
    let total;
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        total = number1 + number2;
        console.log(total);
        number1 = number2;
        number2 = total;
        sum += number2;
    }
    console.log(sum);
}
isFibonacci(5);