function solution(want, number, discount) {
    let answer = 0;
    let wantMap = new Map();

    // Step 1: Convert `want` and `number` into a frequency map
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]); // Store required item counts
    }

    // Step 2: Iterate through the `discount` array using a sliding window
    for (let i = 0; i <= discount.length - 10; i++) {
        let discountMap = new Map();

        // Step 3: Populate the current 10-day window in `discountMap`
        for (let j = i; j < i + 10; j++) {
            discountMap.set(discount[j], (discountMap.get(discount[j]) || 0) + 1);
        }

        // Step 4: Compare `discountMap` with `wantMap`
        let isValid = true;
        for (let [item, count] of wantMap) {
            if (discountMap.get(item) !== count) {
                isValid = false;
                break;
            }
        }

        // Step 5: If valid, increase the answer count
        if (isValid) answer++;
    }

    return answer;
}
