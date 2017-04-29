'use strict'

function hanoi(n, src, aux, dest) {
  if (n == 0) return;
  
  hanoi(n-1, src, dest, aux);
  console.log("Move disk " + n + " from " + src + " to " + dest + "."); 
  hanoi(n-1, aux, src, dest);
}

hanoi(4, 'initial stack', 'temporary stack', 'final stack');




