// Q:---- You stood first in the final exam of Class Saver. Your friends Alia, Dalia, Salia, Malia, Lilia and Jaliya - you don't know their grade. But know their numbers. Alia got 95, Dalia got 66, Salia got 80, Malia got 59, Lilia got 47, Jaliya got 77. Can you grade them with JS code?

// 1) Those who got below 50, their grade F.

// 2) Those who got 50 or above, or below 60, grade D.

// 3) Those who got 60 or above, or below 70, their grade C.

// 4) Those who got 70 or above, or below 80, grade B.

// 5) Those who got 80 or above, or below 90, grade A.

// 6) Those who got 90 or above, grade A+.


function assignmentGrade(score){



    if(score >= 90){
        return "A+";
    }else if( score >=80){
        return "A";
    }else if(score >= 70){
        return "B";
    }else if(score>=60){
        return "C"; 
    }else if(score>=50){
        return "D";
        
    }else if(score>=40){
        return "D-";
    
    }else{
        return "Fail";
    }
}
const friends = {
    Alia: 95,
  Dalia: 66,
  Salia: 80,
  Malia: 59,
  Lilia: 47,
  Jaliya: 77
};
for (const friend in friends){
    const score = friends[friend];
    const grade = assignmentGrade(score);
     console.log(`${friend} got ${score}, grade : ${grade}`);
}
 