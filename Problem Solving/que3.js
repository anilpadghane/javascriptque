/*Perfect Number Check.
Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

Now, You are given an integer 
N
, write a program to check whether the given number is a Perfect Number or not.

Note: You have to complete Perfect _Check function. No need to take any input.

Input Format
The input contains a single number 
N
.

Output Format
Return "YES" if the number is a Perfect Number, else return "NO".

Constraints
1
≤
N
≤
100000

Time Limit
1 second

Example
Sample Input 1
1 */

 
var Perfect_Check = (N) => 
{
var temp = 0;
   for(var i=1;i<= N;i++)
     {
         if(N%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === N && temp !== 0)
        {
       console.log("Yes");
        } 
     else{
       console.log("No");
        }   
 }; 

 
