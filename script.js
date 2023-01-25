/****************************Week 2 Day 3 Exercise XPNINJA***************** */

/**
 * @author: N'GORAN Kouadio Jean Cyrille
 * @description: Exercise XPNINJA DAY 3 Week2
 * Date : 25/01/2023
 */


/* ***************** Exercice 1 : Checking the BMI ************* */


// 1 Create two objects, each object should hold a person’s details. Here are the details
// 2 Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

let firstEntry = {
    FullName : "Lordwin Ngoran",
    Mass : 74,
    Height : 1.95,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); // BMI formula
    }
}

let secondEntry = {
    FullName : "NightWalker Kouassi",
    Mass : 55,
    Height : 1.65,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); // BMI formula
    }
}

// 3 Outside of the objects, create a JS function that compares the BMI of both objects.

function compareBMI(firstEntry, secondEntry) {

    if(firstEntry.BMICalculator() > secondEntry.BMICalculator()) {
        console.log(`the person who have the largest BMI is : ${firstEntry.FullName}`);
        return;
    }
    console.log(`the person who have the largest BMI is : ${secondEntry.FullName}`);
}

// 4 Display the name of the person who has the largest BMI.

compareBMI(firstEntry, secondEntry);



/* ***************** Exercise 2 : Grade Average ***************** */

// variable

let gradesList = [15, 16, 8, 7, 51, 96, 0, 1];


/*
In this exercise we will be creating a function which takes an 
array of grades as an argument and will console.log the average.
*/

//1 Create a function called findAvg(gradesList) that takes an argument called gradesList.
//2 Your function must calculate and console.log the average.

function findAvg(gradesList) {
    
    let average = 0;
    let sum = 0;
    for(let grade of gradesList) {
        sum+=grade;
    }

    // calcul of The average
    average = sum/gradesList.length; 

    console.log(`The average is : ${average}`);
    checkIfAverageIsGood(average);

}

//3 If the average is above 65 let the user know they passed
//4 If the average is below 65 let the user know they failed and must repeat the course.

function checkIfAverageIsGood(average) {
    
    if(average > 65) {
        console.log("Success done");
        return;
    }
    console.log("You failed");
}

findAvg(gradesList);

