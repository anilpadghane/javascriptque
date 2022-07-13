/*Plaindrome Check
You are given a string 
S
, Your task is to check wether the given string is a 
P
a
l
i
n
d
r
o
m
e
 or not.

A 
P
a
l
i
n
d
r
o
m
e
 is a string, which turnout same when read in reverse direction.
Example: "naman" is a Palindrome.
String can contain both upppercase lowercase letters.

Note: You have to complete Plain_Check function. No need to take any input.

Input Format
The first and the only line of the input contains a string 
S
.

Output Format
Return "True" if the given string is 
P
a
l
i
n
d
r
o
m
e
 else return "False" (without " ") .

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
S
 contains both lowercase and uppercase alphabets.

Time Limit
1 second

Example
Sample Input 1
Naman

Sample Output 1
False

Sample Input 2
naman

Sample Output 2
True */

 
var Palin_Check = (str) =>
{
	 let x = str.split('').reverse();
	 if (x===str){
	   return "True";
	 }
	 else {
	   return "Flase";
	 }
};

