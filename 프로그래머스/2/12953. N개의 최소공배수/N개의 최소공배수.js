function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to compute Least Common Multiple (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    var answer = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (i === 0) {
            answer = lcm(arr[i], arr[i + 1]);
        } else {
            answer = lcm(answer, arr[i + 1]);
        }
    }

    return answer;
}