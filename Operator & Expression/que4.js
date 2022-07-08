/* Find the first digit of a 4 digit number
You are provided a four digit number N only. Your task is to print out the first digit of that number.

Note: You have to complete First_Digit function. No need to take any input.

Input Format
The first line contains one four digit natural number 
N
.

Output Format
Return the required result.

Constraints
1000
≤
N
≤
9999

Time Limit
1 second

Example
Sample Input
4567

Sample Output
4*/
//Ans
const First_Digit = (n) => {
    return parseInt(n/1000);
 };
 
 
 