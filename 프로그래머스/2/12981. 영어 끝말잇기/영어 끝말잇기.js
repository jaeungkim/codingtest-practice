function solution(n, words) {
    let answer = 0;
    let person = 0;
    let saidWords = new Map();
    
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let prevWord = words[i - 1];
        
        if(saidWords.has(words[i]) || (i > 0 && word[0] !== prevWord[prevWord.length - 1])){
            person = i % n + 1;
            answer = Math.floor(i / n) + 1;
            break;
        } else {
            saidWords.set(words[i], 1);
        }
        
    }

    return [person, answer];
}