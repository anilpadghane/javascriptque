/* Find if the conditions are obeyed or not?
You are given two number first as 
A
 and second as 
B
 and check if both conditions (
A
<
10
 and 
A
>
B
) are satisfied or not with the help of operators.

Note: You have to complete Is_Valid function. No need to take any input.

Input Format
The first line contains two integers 
A
 and 
B
.

Output Format
Return the result as true if the given condition gets satisfied, else false.

Constraints
1
≤
A
,
B
≤
500

Time Limit
1 second

Example
Sample Input
5 3

Sample Output
true*/
//Ans
const Is_Valid = (a,b) => {
    return (a > b)
      
    };