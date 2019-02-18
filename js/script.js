function tri (){
  var sidex=parseInt(document.getElementById('x').value);
  var sidey=parseInt(document.getElementById('y').value);
  var sidez=parseInt(document.getElementById('z').value);


if (sidex+sidey>sidez && sidex+sidez>sidey && sidey+sidez>sidex){
  if (sidex===sidez && sidey===sidex & sidey===sidez) {
    document.getElementById("answer").innerHTML="Equilateral";
  }
  else if (sidex!==sidey && sidez!==sidey && sidez!==
  sidex){
  document.getElementById("answer").innerHTML="Scalene";
  }
 else {
  document.getElementById("answer").innerHTML="Isosceles";
  }
 } else{
   document.getElementById("answer").innerHTML="Not a triangle";
 }
}
