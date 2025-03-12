function solution(progresses, speeds) {
    let answer = [];
    
    // Calculate remaining days for each task
    let remainingDays = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i]);
    });
    
    let count = 1; // Start counting from the first task
    let currentMax = remainingDays[0]; // First task's completion day
    
    for (let i = 1; i < remainingDays.length; i++) {
        if (remainingDays[i] <= currentMax) {
            // Same batch, can be released together
            count++;
        } else {
            // Next task takes longer, push previous batch
            answer.push(count);
            count = 1; // Reset for the next batch
            currentMax = remainingDays[i]; // Update max day for the new batch
        }
    }
    
    // Push the last batch count
    answer.push(count);
    
    return answer;
}