let arr = [0,1,-2,0,1,7,0,1,0,1];
let x = 0;
do{
  switch (arr[x]) {
  case 0:
    console.log("NO SIGNaL");
    break;
  case 1:
    console.log("SIGNAL FOUND");
    break;
  default:
    console.log("INVALID SIGNAL");
  }
  x++;
}while(x != 10);
  
