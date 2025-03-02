document.getElementById("btn-1").
addEventListener("click", function(event){
  
   event.preventDefault();
 
  //  console.log("boss");

   alert("Board updated successfully");
   
  const number1= document.getElementById("number-1").innerText;
  
  const number2 = document.getElementById("number-2").innerText;
 
  const convertedNumber1 =parseInt(number1);
  const convertedNumber2 =parseInt(number2);
  
  const container= document.getElementById("tranaction-container");
  const p =document.createElement("p");
  p.innerText=`
  
  You have completed the task Fix Mobile Button Issue
   
  `
   container.appendChild(p);




sum1 =convertedNumber1 - 1;
console.log(sum1);
document.getElementById("number-1").innerText =sum1;
sum2 = convertedNumber2 +1 ;
document.getElementById("number-2").innerText =sum2;



})









 









