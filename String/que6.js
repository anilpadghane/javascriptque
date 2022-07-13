/*Find the Winner
You are given a string 
S
 consisting of two letters 
A
 and 
D
,where each character represent the winner of N games played between Aditya and Danish, where letter 
A
 represents the win of Aditya and letter 
D
 represents the win of Danish. 
You need to find out the that which player wins the maximum number of games or there is a draw between them.

Note: You have to complete Game_Winner function. No need to take any input.

Input Format
The first and only line of the input contains string  
S
. 

Output Format
Return the name of the player who have won the maximum number of games, if both player won same number of games return Draw.

Constraints
1
≤
|
S
|
≤
100
, where 
|
S
|
 denotes the length of string 
S
. 

Time Limit
1 second

Example
Sample Input 1
ADDAAADDDDD

Sample Output 1
Danish

Sample Input 2
ADDAAADD

Sample Output 2
Draw */


 
var Game_Winner = (S) => 
{
let x = S.match(/[A]/gmi).length;
let y = S.match(/[D]/gmi).length;
 if (x>y){
 return "Aditya";
}
else if(x<y){
 return "Danish";
 }
 else{
   return "Draw";
 }
};
 
