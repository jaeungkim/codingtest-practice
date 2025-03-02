function solution(s) {
    let deletedZeroCount = 0;
    let loopCount = 0;

    while (s !== '1') {
        // Count the number of 0s removed
        const zeroCount = s.split('0').length - 1;
        deletedZeroCount += zeroCount;

        // Remove all 0s and get the new length
        s = s.replace(/0/g, '');
        s = s.length.toString(2); // Convert new length to binary

        loopCount++;
    }

    return [loopCount, deletedZeroCount];
}
