console.log("woking");
/*Print the Pattern.
Write a program which ask user for no of lines and print a pattern using an asterik .

Note: You have to complete Print_pattern. No need to take any input.

Input Format
The input contains a single number 
N
.

Output Format
Print the required pattern.

Constraints
1
≤
N
≤
100

Time Limit
1 second

Example
Sample Input
5

Sample Output
*
**
***
****
*****
 */


const Print_pattern = (N) => 
{
for(let a = 1; a <= N ; a++){
     let i = '';
     for(let b = 0; b < a; b++){
       i = i + "*";
     }
     console.log(i);
   }
 };
