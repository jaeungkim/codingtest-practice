function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

function solution(n, k) {
    let answer = 0;
    let kTransformArray = n.toString(k).split('');

    let compareArray = [];
    for (let i = 0; i < kTransformArray.length; i++) {
        if (Number(kTransformArray[i]) === 0 && compareArray.length > 0) {
            let num = compareArray.join('');
            if (isPrime(Number(num))) {
                answer++;
            }
            compareArray = [];
        } else {
            compareArray.push(kTransformArray[i])
        }

    }
        if (compareArray.length > 0) {
            let num = compareArray.join('');
            if (isPrime(Number(num))) {
                answer++;
            }
        }
    

    return answer;
}