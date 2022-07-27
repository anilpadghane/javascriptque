//1.Create one function with zero parameter having a console statement;
//ans-
function hi() {
    console.log("wlecome to The Maharashtra");
}
hi();

//2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
//ans-
 function sum(a,b){
    Result = a+b;
    console.log(Result);
 }
 sum(3,4);

 //3.Create one arrow function
 //ans-
 const value = (()=>{
    console.log(786);
 })
 value();

 //4."Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
 //Ans- output undefined if x=20 is not present the output will get 21
 
 
// 5."Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//Ans- output will get "21" bcoz Initialization not hoisted var x=20;

//6."Print output

//var x = 21;
//a();
//b();
//console.log(a);
//a = function() {
    
  // x = 20;
  //console.log(x);
//};
//b = function() {
    
  //  x = 40;
   //console.log(x);
//};

//Ans- Reference error 'a' is not defined 


//7.Write a function that accepts parameter n and returns factorial of n
//Ans-
function factorial (n){
    let Result =1;
    if(n==0||n==1)
    {
        return Result;
    }
    else{
         for (var i=n; i>=1; i--)
         {
            Result= Result * i;
         }
         return Result;
    }
}
let n= 5;
Result =factorial(n)
console.log("factorial of " + n + "is" + Result );


