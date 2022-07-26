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
 
function changeImg() {
    
    var img =document.getElementById('img-1');
    img.src ='Component 31 – 1@2x.png';
    document.querySelector('#msg').innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.querySelector('#msg2').innerHTML="LET'S HAVE SOME LUNCH !!";
}
//New Message and Image changes in specific  timing
if(hours < 12){
    var img =document.getElementById('img-1');
    img.src ='Component 30 – 1.png';
    document.querySelector('#msg').innerHTML="GOOD MORNING!! WAKE UP !!";
    document.querySelector('#msg2').innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";

}
if(hours >= 12 && hours <= 16 ){
var img =document.getElementById('img-1');
    img.src ='Component 31 – 1@2x.png';
    document.querySelector('#msg').innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.querySelector('#msg2').innerHTML="LET'S HAVE SOME LUNCH !!";

}
if(hours >= 16 && hours <=20 ){
    var img =document.getElementById('img-1');
    img.src ='lunch_image@2x.png';
    document.querySelector('#msg').innerHTML="GOOD EVENING !!";
    document.querySelector('#msg2').innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
}
if(hours >=20 && hours<=00){
    var img =document.getElementById('img-1');
    img.src ='goodnight_image@2x.png';
    document.querySelector('#msg').innerHTML="GOOD EVENING !!";
    document.querySelector('#msg2').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";

}

function dateTime(k){
    if (k<10){
        return "0" + k
    }else {
        return k;
    }
}  
 autoTimeUpdate();
