function solution(s) {
    let answer = [];

    s = s.replace(/{/g, '[');
    s = s.replace(/}/g, ']')
    let sArray = JSON.parse(s);

    sArray = sArray.sort((a, b) => a.length - b.length);

    for (let i = 0; i < sArray.length; i++) {
        for (let j = 0; j < sArray.length; j++) {
            if (answer.indexOf(sArray[i][j]) === -1) {
                answer.push(sArray[i][j]);
                break;
            }
        }
    }
    return answer;
}