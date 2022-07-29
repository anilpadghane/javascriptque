//que-1 Write one example explaining how you can write a callback function ?
const element =function(){
    console.log("Prepbytes");
}
setTimeout(element,1000)


//que-2 "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

//Explain callback hell.
//Numbers
//1
//2
//3
//4
//5
//6
//7"

const element1 = function(){
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
}
setTimeout(element1,1000);
setTimeout(element1,2000);
setTimeout(element1,3000);
setTimeout(element1,4000);
setTimeout(element1,5000);
setTimeout(element1,6000);
setTimeout(element1,7000);


//que-3 "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

/*Numbers
1
2
3
4
5
6
7"*/

let elementOne = new Promise((resolve,reject) => { resolve();})
 elementOne.then(() => {
     setTimeout(() => {
        console.log("1");
      },1000);
    }).then(() => { 
     setTimeout(() => { 
        console.log("2");
     },2000);
    }).then(() => {
     setTimeout(() => {
         console.log("3");
         },3000);
    }).then(() => { 
     setTimeout(() => {
         console.log("4");
         },4000);
    }).then(() => { 
     setTimeout(() => {
         console.log("5");
         },5000);
    }).then(() => { 
     setTimeout(() => {
         console.log("6");
         },6000);
    }).then(() => {
     setTimeout(() => {
         console.log("7");
         },7000);
    }) 


//que-4 Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.
const elementTwo = new Promise((resolve,reject) => {  
    setTimeout(() => {
          resolve();
          reject();       
      },2000);
  })
 elementTwo        
  .then((data) => {
      console.log("Promise Resolved");
  })
  .catch((error) => {
      console.log("Promise rejected");
  });

//que-5 Create examples to explain callback function

const elementThree = () =>{
  let num = ["1","2","3","4","5"];
      console.log(num); 
} 
setTimeout(elementThree,2000);


//que-6 Create examples to explain callback hell function

const elementFour = () =>{
  setTimeout(()=>
  {
      let name = ["sumit","kale"];
      console.log(`Name of the employee ${name}`);
  },3000);
} 
elementFour();

//que-7 Create examples to explain promises function

const newPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
     let mobName = ["realme","onePlus","Sumsung","Iphone"];
     resolve(mobName);
     reject();
  },3000);
})
newPromise
.then((names)=>{
  console.log("promise names",names);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("resolved promise !");
});

//8.Create examples to explain async await function
const elementFive = async () =>{
  return new Promise((res,rej)=>{
      setTimeout(() => {
          res ("welcome");
          rej();
      },5000);
  })
}
const elementSix = () =>{
  return ("Maharashtra");
}
const one = async ()=>{
  let wardha = await elementFive();
  console.log(wardha);

  let nagpur = elementSix();
  console.log(nagpur);
}
elementFive();

//9.Create examples to explain promise.all function

let a = Promise.resolve(50);
let b = 200;
let c = new Promise(function(resolve, reject) {
  resolve("promise all");
  reject();
});

Promise.all([a, b, c])
.then(function(values) {
  setTimeout(()=>{
      console.log(values);
  },2000)    
});