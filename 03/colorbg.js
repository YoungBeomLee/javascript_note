const color = ["red", "yellow", "green", "orange", "purple", "blue"];

var i = 0;

function colorbg() {
  let bodytag = document.getElementsByTagName("body")[0];
  console.log(bodytag);
  bodytag.style.backgroundColor = color[i];
  i++;
  if(i>=color.length){
    i=0;
  }
  
 
  
  
  console.log(i);
}
