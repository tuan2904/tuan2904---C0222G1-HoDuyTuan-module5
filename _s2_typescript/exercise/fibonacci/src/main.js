function isFibonacci(number) {
    var number1 = 0;
    var number2 = 1;
    var total;
    var sum = 0;
    for (var i = 0; i <= number; i++) {
        total = number1 + number2;
        console.log(total);
        number1 = number2;
        number2 = total;
        sum += number2;
    }
    console.log(sum);
}
isFibonacci(5);
