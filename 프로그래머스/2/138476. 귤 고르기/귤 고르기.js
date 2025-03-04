function solution(k, tangerine) {

    let tangerineMap = new Map();
    let answer = 0;
    // use hashmap perhaps
    for (let i = 0; i < tangerine.length; i++) {
        if (tangerineMap.has(tangerine[i])) {
            let value = tangerineMap.get(tangerine[i]);
            tangerineMap.set(tangerine[i], value + 1);
        } else {
            tangerineMap.set(tangerine[i], 1);
        }
    }

    // sorted counts
    let sortedCounts = [...tangerineMap.values()].sort((a, b) => b - a);

    let count = 0;
    for (let i = 0; i < sortedCounts.length; i++) {
        count += sortedCounts[i];
        answer++; // Each unique size picked
        if (count >= k) break;
    }
    return answer;
}