function autoTimeUpdate(){
var dateTime = new Date();
var hours = dateTime.getHours();
var minute =dateTime.getMinutes();
var second =dateTime.getSeconds();
var am_or_pm =document.getElementById('am_or_pm');
if(hours >=12){
    am_or_pm.innerHTML = "PM";
}else{
    am_or_pm.innerHTML = "AM";

}
//When hours is 12 to 24
if(hours > 24){
    hours = hours - 12;
}
if(hours>00){
    
}


document.getElementById('hours').innerHTML = hours;
document.getElementById('minute').innerHTML = minute;
document.getElementById('second').innerHTML = second;
}
setInterval(autoTimeUpdate,1000)
  

   var current = new Date();
   var morning =current.getHours(); 
    if(hours > 17.
        ){
       
        img.src ="Component 30 – 1.png";
    }
     if (hours > 12-13) {
        
            img.src = "Component 31 – 1@2x.png";
        }
        if(hours >16-17) {
            img.src = "lunch_image@2x.png";
            
        } 
        if (hours >20-21) {
        
            img.src = "goodnight_image@2x.png";    
            
        }
   