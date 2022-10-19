let A = 0;

function correct() {
  A = document.getElementById("facit").value;
  console.log(A);
}
function guessnumber() {
  let B = document.getElementById("guess").value;
  console.log(B);
  if (A==B){
    alert("Helt korrekt!");
  }
else {
    if  (B<A){
        alert("För lågt!");
    }
    if (B>A) {
        alert("För högt!");
    }
}
}




