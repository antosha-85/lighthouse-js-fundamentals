function merge(theArray1, theArray2) {
  var theArray3 = [ ];
  theArray3 = theArray1.concat(theArray2);
  theArray3.sort(function(a, b) {
    return a - b;
  })
  
  return theArray3;
  
}


