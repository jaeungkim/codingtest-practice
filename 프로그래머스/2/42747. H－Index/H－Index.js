function solution(citations) {
    citations.sort((a, b) => b - a); // Sort citations in descending order
    
    // 6 5 3 1 0
    let hIndex = 0;
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) { // 6 >= 1 
            hIndex = i + 1;
        } else {
            break;
        }
    }
    
    return hIndex;
}
