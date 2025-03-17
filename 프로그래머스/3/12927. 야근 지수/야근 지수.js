function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(heap, i, n) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && heap[left] < heap[smallest]) smallest = left;
    if (right < n && heap[right] < heap[smallest]) smallest = right;

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, smallest, n);
    }
}

function push(heap, val) {
    heap.push(val);
    let idx = heap.length - 1;
    while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (heap[parent] <= heap[idx]) break;
        [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
        idx = parent;
    }
}

function pop(heap) {
    const n = heap.length;
    if (n === 0) return 0;

    const top = heap[0];
    heap[0] = heap.pop();
    heapify(heap, 0, heap.length);

    return top;
}

function solution(n, works) {
    if (works.reduce((a, b) => a + b, 0) <= n) return 0;

    // Negate to simulate a max heap with a min-heap
    const heap = works.map(x => -x);
    
    // Turn into a valid min-heap
    buildHeap(heap);

    for (let i = 0; i < n; i++) {
        let max = pop(heap);
        if (max === 0) break;    // No more work
        push(heap, max + 1);     // Reduce work by 1 (less negative)
    }

    // Calculate the overtime index (negate back)
    return heap.reduce((sum, v) => sum + v * v, 0);
}