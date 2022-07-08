console.log("working");

/*  Find Sum
You are given an integer 
N
, and your task is to find the sum of all the even integers starting from 
1
 upto 
N
 (
N
 inclusive).

Note: You have to complete findSum function. No need to take any input.

Input Format
The first and the only line of the input contains an integer 
N
.

Output Format
Return the sum of all even integers from 
1
 upto 
N
 (N inclusive).

Constraints
1
≤
N
≤
500

Time Limit
1 second

Example
Sample Input
6

Sample Output
12*/


const findSum = (n) => {
    let sum = 0;
    let i = 2;
     while(i <= n){
       sum = sum + i;
      i = i + 2;
     }
    return sum;
};

