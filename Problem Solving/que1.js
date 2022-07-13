/*Find the Smaller Angle
PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

Note: You have to complete Minimal_Angle function. No need to take any input.

Input Format
The input contains two number 
h
 and 
m
, which represents the current time as hour and minutes.

Output Format
Return the Minimal angle formed between the Hour hand and Minute hand.

Constraints
All valid times

Time Limit
1 second

Example
Sample Input 1
5 30

Sample Output 1
15

Sample Input 2
6 0

Sample Output 2
180 */



var Minimal_Angle = (h, m) => 
{
  let ha =  (h * 30) % 360, ma = m * 6, aa = (m/60) * 30;
  let a1 = (ha % 360) + aa, ang = Math.abs(a1-ma);
  return Math.min(ang,360-ang);  
};
 
