//Que-1: Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

//Ans-
const FirstPrototype = {
    getDetails(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    },
}
FirstPrototype.details = function(){
    console.log(`The person name is ${this.fName} ${this.lName} and the person age is ${this.age}`);
}

const firstObj = Object.create(FirstPrototype);
firstObj.getDetails('Sumit', 'Kale', 25);
firstObj.details();

const secondObj = Object.create(FirstPrototype);
secondObj.getDetails('Shailesh', 'Yadav',27);
secondObj.details();


//Que-2:Write code to explain prototype chaining

//Ans-
const PrototypeOne = {
    getDetails(fName, lName, marks){
        this.fName = fName;
        this.lName = lName;
        this.marks = marks;
    },
    displayDetails(){
        console.log(`The name of the person is ${this.fName} ${this.lName} and the person  pointer is ${this.marks}`);
    },
}

const firstPerson = Object.create(PrototypeOne);
firstPerson.getDetails('Sumit', 'Kale', 75);
firstPerson.displayDetails();

const addDetails = Object.create(PrototypeOne);

addDetails.addmarks = function(fName, lName, marks, totalmarks){
    PrototypeOne.getDetails.call(addDetails, fName, lName, marks,totalmarks);
    this.totalmarks = totalmarks;
}

addDetails.display = function(){
    console.log(`The name of the person is ${this.fName} ${this.lName} and the person  got marks ${this.marks} for swimming and total marks is ${this.totalmarks}`);
}

const secondDetails = Object.create(addDetails);
secondDetails.addmarks('shailesh', 'Yadav', 55, 75);
secondDetails.display();

const thirdDetails = Object.create(addDetails);
thirdDetails.addmarks('Akash', 'Maske', 55, 60);
thirdDetails.display();


//Que-3:Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

//Ans-
FirstPrototype.calculateTotalPoints = function(arrayPoints){
    let sum = 0;
    for(let i in arrayPoints){
        sum+= arrayPoints[i];
    }
    console.log(`He earned total of ${sum}.`);
}

let Shailesh = [49, 59, 83, 39, 88];

FirstPrototype.calculateTotalPoints(Shailesh);

let Sumit = [95, 90, 88, 68, 45];

FirstPrototype.calculateTotalPoints(Sumit);

//Que-4:Write a JavaScript function to retrieve all the names of object's own and inherited properties.

//Ans-
const firstProperty = {
    name: 'Akhilesh',
    age : 22
}
const secondProperty = {
    yearOfBirth : 2000
}

secondProperty.__proto__ = firstProperty;
function inheritedPropertyNames(){
    for(let i  in secondProperty){
        console.log(i);
    }
}
inheritedPropertyNames();