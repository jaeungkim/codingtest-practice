function solution(cacheSize, cities) {
    let answer = 0;
    let cacheArray = [];
    
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase(); // Convert city name to lowercase

        let cityIndex = cacheArray.indexOf(city); // Check if city is already in cache

        if (cityIndex !== -1) { 
            // Cache Hit: Move the city to the end (most recently used)
            cacheArray.splice(cityIndex, 1); // Remove it from current position
            cacheArray.push(city); // Re-add at the end
            answer += 1;
        } else {
            // Cache Miss
            answer += 5;

            if (cacheArray.length >= cacheSize && cacheSize > 0) {
                cacheArray.shift(); // Remove LRU (leftmost item)
            }
            

            if(cacheSize>0){
                cacheArray.push(city); // Add new city to cache
            }
            
        }
    }
    
    return answer;
}