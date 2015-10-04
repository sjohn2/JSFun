var arr = [10,2,3,[4, [2,5,6]]];
var tempArray = [];
function sortArray(arr){
  
for(var i=0, iLen = arr.length; i<iLen; i++){
  if(arr[i] instanceof Array){
    sortArray(arr[i]);
  }else{
    tempArray.push(arr[i]);
  }
  
}
  
console.log(tempArray);  
  
}




sortArray(arr);