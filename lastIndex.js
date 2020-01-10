function lastIndexOf(list, num) {  
  let isPresent = false;  
  let index;  
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] === num) {     
      index = i;      
      isPresent = true;
      break;
    }
  }
  if (index >= 0) {    
    return index;  
  } else {    
    return -1;  
  }
 }