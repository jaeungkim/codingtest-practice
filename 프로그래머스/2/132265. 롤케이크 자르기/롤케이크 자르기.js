function solution(topping) {
    let answer = 0;

    // Maps to count occurrences of toppings
    const leftMap = new Map();
    const rightMap = new Map();

    // Fill the rightMap with all toppings first
    for (let t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    // Move one topping at a time from right to left
    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];

        // Add topping to the left side
        leftMap.set(t, (leftMap.get(t) || 0) + 1);

        // Remove topping from the right side
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }

        // Compare unique topping counts
        if (leftMap.size === rightMap.size) {
            answer++;
        }
    }

    return answer;
}