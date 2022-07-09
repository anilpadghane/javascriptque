/*Increment the Array Elements
You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

You have to complete Inc_Arr. No need to take any input.

Input Format
The input contains a single number 
N
, then 
N
 array elements as input.

Output Format
Print the required answer in the function itself.

Constraints
1
≤
N
≤
100

1
≤
E
l
e
m
e
n
t
o
f
t
h
e
A
r
r
a
y
≤
1000

Time Limit
1 second

Example
Sample Input
5
1 2 3 4 5

Sample Output
2 3 4 5 6  */


const Inc_Arr = (array,N) => 
{
  
array.forEach(function(element){
     console.log(element + 1);
   }
);
};
 
