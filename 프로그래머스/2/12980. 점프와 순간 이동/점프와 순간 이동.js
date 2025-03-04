function solution(n) {
    let counter = 0;

    while (n !== 0) {
        if (n === 0) {
            counter++
            break;
        }
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n--;
            counter++;
        }
    }
    return counter;
}