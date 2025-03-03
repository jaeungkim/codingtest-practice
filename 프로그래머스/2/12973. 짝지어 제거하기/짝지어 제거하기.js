function solution(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove last element if it matches the current one
        } else {
            stack.push(char); // Otherwise, add the character to the stack
        }
    }

    return stack.length === 0 ? 1 : 0;
}
