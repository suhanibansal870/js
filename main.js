function isLeap(year) {
   if (year % 4 === 0){
       if (year % 100 === 0){
           if (year % 40 !== 0){
               console.log("Leap year.");
           }

           else{
               console.log("Not a leap year.");
           }
       }
       else{
           console.log("Not a leap year.");
       }
   }

   else{
       console.log("Not a leap year.");
   }
}

isLeap(2000);
