function solution(s){
    const sArray = s.split('');
    let count = 0;
    
    for(let i = 0; i < sArray.length; i++){
    
        if(sArray[i]==='('){
            count = count + 1;
        } else if(sArray[i]===')'){
            count = count - 1;
        }
        
        if(count < 0){
            return false;
        }
    }    
    
  return count === 0 ? true : false;
}