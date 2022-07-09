/*Min and Max
Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
The problem statement is simple- given 
N
 elements, find the minimum and maximum numbers among those elements.

Input format
First-line contains 
N
 representing the length of the array.
The second line contains 
N
 space-separated integers.

Output format
Return minimum and maximum elements.

Constraints
1
<=
N
<
10
7

0
<=
A
[
i
]
<=
10
7

Time limit
1
 second

Example
Input
6

3
 
1
 
4
 
6
 
2
 
7

Output
1
 
7

Sample Test Case Explanation
In the first test case
minimum element = 
1
 and
maximum element = 
7

In the second test case
minimum element = 
0
 and
maximum element = 
0 */

 
function arrayMin(arr) {
    let min = arr[0];
       for(let p of arr){
         if(min > p){
           min = p;
         }
       }
       return min;
     }
  
  
  function arrayMax(arr) {
   
      let max = arr[0];
       for(let p of arr){
         if(max < p){
           max = p;
         }
       }
      return max;
  }