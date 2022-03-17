//**************************Laiba kanwal (Fa19-bcs-034)**************************************/
//###########################################################################
console.log("Q1");

let argument=[2,3,6,1,7];
 let a=0;
   let x =parseInt(argument[0]);
   let y =parseInt(argument[1]);
   for(let i=0; i<y; i++)
   {
    a=argument[1];
   }
   console.log((y+1), "digit from last is ="+a);


//###########################################################################
console.log("\nQ2");

 var value = 23617,
     sumOfValue = value
         .toString()
         .split('')
         .map(Number)
         .reduce(function (a, b) {
             return a + b;
         }, 0);

 console.log(sumOfValue);
//###########################################################################
console.log("\nQ3");

    let numStr = [2,3,6,1,7];
    let evenSum = 0;
   for (let i = 0; i < numStr.length; i++) {
     if (numStr[i] % 2 === 0){ 
         evenSum = evenSum + numStr[i];
     }
   }
 
  console.log(evenSum);
//###########################################################################
console.log("\nQ4");

 for(let i=0;i<=10;i++)
 {
     console.log("square"+(i*i));
     console.log("cube"+(i*i*i));
 }
//###########################################################################
console.log("\nQ5");

 function vowel(str)
 {
     var x=str.split(",")
     console.log(x[0])
 }
 vowel("a,e,i,o,u")
 function reverse_a_number(n)
 {
 	n = n + "";
 	return n.split("").reverse().join("");
 }
 console.log(Number(reverse_a_number(3455431212)));
//###########################################################################
console.log("\nQ6");

 const nums = Math.ceil(Math.random() * 10);
 
  let num=8;
  if (num == nums)
    console.log('Matched');
   else
    console.log('Not matched, the number was '+num);
//###########################################################################
console.log("\nQ7");

 function positionCheck(nums)
 {
  var end_pos = nums.length - 1;
   if(nums.length>=2){
   return nums[0] == 10 || nums[end_pos] == 10;
   }
 }
 console.log(positionCheck([1, 3, 5, 10]));
 console.log(positionCheck([10,2, 4, 6]));
//###########################################################################
console.log("\nQ8");

 function alphabet_order(str)
   {
 return str.split('').sort().join('');
   }
 console.log(alphabet_order("comsats"));