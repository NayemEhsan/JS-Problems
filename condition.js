
// Q:---- Rushing out for school but crossing the road, the traffic signal is red. If you try to cross the road in this condition, it can be dangerous. If the color is yellow then you should stop. And if the traffic signal is green then you should cross the road. So write a code. Where we will have a variable called signal. Its value can be green, yellow or red. Different will work accordingly. So, write that code fast.
   const signal = "green";

   if (signal === "green"){
    console.log("Traffic signal green.You can cross the road safely");
   }else if(signal=== "yellow"){
    console.log("Traffic signal yellow.Please stop and wait");
   }else if(signal === "red"){
    console.log("Its dangerous to cross,please wait");
   }else{
    console.log("invalid signal.Please enter green,yellow or red");
   }