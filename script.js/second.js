document.getElementById("btn-2").
addEventListener("click", function(event){
   event.preventDefault();
//    console.log(event);

   
   alert("Board updated successfully");

   const number1= document.getElementById("number-1").innerText;
  
   const number2 = document.getElementById("number-2").innerText;
  
   const convertedNumber1 =parseInt(number1);
   const convertedNumber2 =parseInt(number2);

   const container= document.getElementById("tranaction-container");
  const p =document.createElement("p");
  p.innerText=`
  
  You have completed the task Add Dark Mode
  `
   container.appendChild(p);
   
  
  
   sum11 =convertedNumber1 - 1;


console.log(sum11);
document.getElementById("number-1").innerText =sum11;
sum22 = convertedNumber2 +1 ;


document.getElementById("number-2").innerText =sum22;



})