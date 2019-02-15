function tri ();{
  var side x=parseInt(document.getElementById('x').value);
  var side y=parseInt(document.getElementById('y').value);
  var side z=parseInt(document.getElementById('z').value);
  var answer=document.getElementbyId('answer')
  var triangles=["Scalene", "Equilateral", "Scalene"];

if(side x+side y>side z && side x+side z>side z=x && side y+side z>side x) {
  if (side x===side z && side y===side x) {
    answer.innerHTML= "Equilateral."
  }
  else if (side x!=side y && side z!=side y side z!=side x) {
    anwer.innerHTML="Scalene."
  }
} else (true) {

} {
  answer.innerHTML="Isosceles."
}
}

 else if (isNAN(side x) || isNAN(side y) || isNAN(side z)) {
   answer.innerHTML= "Is not a number!!"
 } esle {
   answer.innerHTML="Is not a triangle!!"
 }

 function reload(){
   location.reload();
 }
}
