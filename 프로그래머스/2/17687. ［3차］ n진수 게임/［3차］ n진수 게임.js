function solution(n, t, m, p) {
    let numArray = [];

    let i = 0;
    while (numArray.length < t * m) {
        let numToPush = i.toString(n).toUpperCase();
        numArray.push(...numToPush);
        i++;
    }

    let answerArray = [];

    for (let i = p - 1; answerArray.length < t; i += m) {
        answerArray.push(numArray[i]);
    }

    return answerArray.join('');
}