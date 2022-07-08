/* Check the conditons
You are given two numbers 
A
 and 
B
. You need to do the following checks:

if both are divisible by 10 console true.
if both are not divisible by 10 console false.
if one of them only is divisible by 10 console true.
Use operator to do this.

Note: You have to complete Check function. No need to take any input.

Input Format
The first line contains two natural numbers 
A
 and 
B
.

Output Format
Return the required result.

Constraints
1
≤
A
,
B
≤
10000

Time Limit
1 second

Example
Sample Input
12 20

Sample Output
true*/
//Ans
const Check = (A, B) => 
{
 return ((A%10 === 0 && B%10 === 0) || (A%10 === 0 || B%10 === 0 )) ? "true" : "false";

};

