/* Match the Strings
You are given two strings 
S
1
 and 
S
2
, Your task is to print 
Y
E
S
 if both strings are same else print 
N
O
.

Note: You have to complete String_Match function. No need to take any input.

Input Format
The first line of the input contains a string 
S
1
.
The second line of the input contains a string 
S
2
.

Output Format
Return 
Y
E
S
 if 
S
1
 and 
S
2
 are same, else return 
N
O
.

Constraints
1
≤
|
S
1
|
,
|
S
2
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
1
 and 
S
2
 contains both lowercase and uppercase alphabets.

Time Limit
1 second

Example
Sample Input
Prepbytes
Prepbytes

Sample Output
YES */


var String_Match = (S1,S2) => 
{
    if(S1===S2){
      return "Yes";
    }
    else{
    return "No";  
    }
    
};
 
