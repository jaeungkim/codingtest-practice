function solution(elements) {
    let elementsConcat = elements.concat(elements);

    let answer = new Set();
    // 1 1 4 7 9 , 1 1 4 7 9
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;

        for (let j = 0; j < elements.length; j++) {
            sum += elementsConcat[i + j];
            answer.add(sum);
        }

    }



    return answer.size;
}