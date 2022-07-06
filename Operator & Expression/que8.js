
/*Marks Calculator
Shyam has got his marks in three subjects as 
A
, 
B
, and 
C
 (out of 100).Write a program to calculate his total marks and his average.

Note: You have to complete Sum and Average functions. No need to take any input.

Input Format
The input contains three numbers 
A
, 
B
 and 
C
.

Output Format
Return the required result.

Constraints
0
≤
A
,
B
,
C
≤
100

Time Limit
1 second

Example
Sample Input
50 20 100

Sample Output
170
56.67 */

const Sum = (A, B, C) => 
{
 return(A+B+C);
};

const Average = (A, B, C) => 
{
 return((A+B+C)/3);
};
