function solution(want, number, discount) {
    let answer = 0;
    let wantMap = new Map();

    // populate the wantMap
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    // iterate the discount array with sliding window
    for (let i = 0; i <= discount.length - 10; i++) {
        let discountMap = new Map();

        // populate discountMap
        for (let j = i; j < i + 10; j++) {
            discountMap.set(discount[j], (discountMap.get(discount[j]) || 0) + 1);
        }

        // compare wantMap and discountMap
        let isValid = true;
        for (let [key, value] of wantMap) {
            if (value !== discountMap.get(key)) {
                isValid = false;
                break; // Now correctly stops only if there's a mismatch
            }
        }
        if (isValid) {
            answer++;
        }
    }

    return answer;
}