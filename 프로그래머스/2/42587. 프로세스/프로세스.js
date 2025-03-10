function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => ({
        priority,
        idx
    }));

    // Priorities sorted from highest to lowest
    const sortedPriorities = [...priorities].sort((a, b) => b - a);

    let order = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.priority < sortedPriorities[order]) {
            queue.push(current); // Move to back of queue
        } else {
            order++; // Print the document
            if (current.idx === location) {
                return order;
            }
        }
    }
}