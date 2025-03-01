function solution(s) {
    // turn s into an array first
    const sArray = s.split(' ').map(Number);
    let min;
    let max;
    
    for(let i = 0; i < sArray.length; i++){
       if(min === undefined || sArray[i] < min) {
           min = sArray[i];
           console.log(min);
       } 
        
        if(max === undefined || sArray[i] > max){
            max = sArray[i];
        }    
    }
    
    var answer = `${min} ${max}`;
    return answer;
}