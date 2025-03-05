function validParenthesis(input) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for (let char of input) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

    function solution(s) {
       let answer = 0;
        let sConcat = s.concat(s);
        for(let i = 0; i <s.length;i++){
            let newArray = [];
            for(let j = 0; j < s.length;j++){
                newArray.push(sConcat[j+i]);
            }
            if(validParenthesis(newArray.join(''))) answer++;
        }
        return answer;
    }