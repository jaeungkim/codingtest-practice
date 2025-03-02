function solution(n) {
    let answer;
    
    let nToBinary = n.toString(2).split('');
    let oneCount = 0;

    // Count the number of '1's in binary representation of n
    for (let i = 0; i < nToBinary.length; i++) {
        if (nToBinary[i] === '1') oneCount++;
    }
    
    for (let i = n + 1; ; i++) {  // No need for an upper limit
        let iToBinary = i.toString(2).split('');
        let iOneCount = 0;

        // Count '1's in binary representation of i
        for (let j = 0; j < iToBinary.length; j++) {
            if (iToBinary[j] === '1') {
                iOneCount++;
            }
        }
        
        // If the count matches, return the number
        if (oneCount === iOneCount) {
            answer = i;
            break; // Stop the loop early
        }
    }
    
    return answer;
}
