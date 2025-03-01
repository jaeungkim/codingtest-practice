function solution(s) {
    const sArray = s.split(' '); 
    let answerArray = [];

    for(let i = 0; i < sArray.length; i++){
        const indexArray = sArray[i].split('');
        let indexString = [];

        if (indexArray[0]) {
            indexString.push(indexArray[0].toUpperCase());
        }

        for(let j = 1; j < indexArray.length; j++){
            indexString.push(indexArray[j].toLowerCase());
        }

        answerArray.push(indexString.join(''));
    }
    
    const answer = answerArray.join(' ');
    return answer;
}