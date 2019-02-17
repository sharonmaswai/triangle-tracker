function tri(){
  var sidex=parseInt(document.getElementById('x').value);
  var sidey=parseInt(document.getElementById('y').value);
  var sidez=parseInt(document.getElementById('z').value);
  

if (sidex+sidey>sidez && sidex+sidez>sidex && sidey+sidez>sidex){
  if (sidex===sidez && sidey===sidex & sidey===sidez) {
    alert("Equilateral.")
  }
  else if (sidex!==sidey && sidez!==sidey && sidez!==
  sidex){
    alert("Scalene.")
  }
 else {
    alert("Isosceles.")
  }
 } else{
   alert("Is not a triangle")
 }
}
