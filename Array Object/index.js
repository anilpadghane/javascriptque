console.log("working");


let studentRecords =[ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ]


// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

for(let i=0;i<studentRecords.length;i++)
{

    console.log(studentRecords[i].name.toUpperCase());
}

// Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

for(let i=0;i<studentRecords.length;i++)
{

    if(studentRecords[i].marks>50)
    {

        console.log(studentRecords[i]);
    }
}


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.



for(let i=0;i<studentRecords.length;i++)
{

    if(studentRecords[i].marks>50 && studentRecords[i].id>120)
    {

        console.log(studentRecords[i]);
    }
}


// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
// let sum = studentRecords.reduce((acc,curr) => acc += curr ,0);
let sum = 0;
for(let i=0;i<studentRecords.length;i++)
{

    sum += studentRecords[i].marks;
}
console.log(sum);


// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

for(let i=0;i<studentRecords.length;i++)
{

    if(studentRecords[i].marks>50)
    {

        console.log(studentRecords[i].name);
    }
}

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
sum = 0;
for(let i=0;i<studentRecords.length;i++)
{

    if(studentRecords[i].id>120)
    {

        sum += studentRecords[i].marks;
    }
}
console.log(sum);


// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

 
 
for(let i=0;i<studentRecords.length;i++)
{

    if(studentRecords[i].marks<50)
    {

        studentRecords[i].marks += 15;
    }
}

sum = 0;
for(let i=0;i<studentRecords.length;i++)
{

    if(studentRecords[i].marks>50)
    {

        sum += studentRecords[i].marks;
    }
}
console.log(sum);

