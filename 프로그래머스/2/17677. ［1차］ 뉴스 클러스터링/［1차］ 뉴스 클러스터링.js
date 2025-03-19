function solution(str1, str2) {
    let str1Array = [];
    let str2Array = [];

    for (let i = 0; i < str1.length - 1; i++) {
        if (!str1[i].match(/[a-z]/i) || !str1[i + 1].match(/[a-z]/i)) continue;
        let bigram = str1[i].toUpperCase() + str1[i + 1].toUpperCase();
        str1Array.push(bigram);
    }

    for (let i = 0; i < str2.length - 1; i++) {
        if (!str2[i].match(/[a-z]/i) || !str2[i + 1].match(/[a-z]/i)) continue;
        let bigram = str2[i].toUpperCase() + str2[i + 1].toUpperCase();
        str2Array.push(bigram);
    }

    let str1Map = new Map();
    let str2Map = new Map();

    for (let val of str1Array) {
        str1Map.set(val, str1Map.get(val) + 1 || 1);
    }

    for (let val of str2Array) {
        str2Map.set(val, str2Map.get(val) + 1 || 1);
    }

    let intersection = 0;
    let union = 0;

    let keys = new Set([...str1Map.keys(), ...str2Map.keys()]);

    for (let key of keys) {
        let count1 = str1Map.get(key) || 0;
        let count2 = str2Map.get(key) || 0;

        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }

    if (union === 0) return 65536;

    return Math.floor((intersection / union) * 65536);
}