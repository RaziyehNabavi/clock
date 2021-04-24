'use strict' ;
let hour = 0;
let minute = 0;
let second = 0 ;



const secondCounter = function(){
    setInterval(function(){
        if(second<59){
            second++;
        }else{
            second = 0;
        }
        document.querySelector('#second').textContent = second <10 ? '0'+second: second;    

    },1000)
}
secondCounter();


const minutecounter = function(){
    setInterval(function() {
        if(minute < 59){
            minute++;
        }else{
            minute = 0;
        }
        document.querySelector('#minute').textContent = minute <10 ? '0'+minute: minute;   

    }, 1000*60);
}
minutecounter()

const hourCounter = function(){
    setInterval(function() {
        if(hour<24){
            hour++;
        }else{
            hour = 0;
        }
        document.querySelector('#hour').textContent=  hour <10 ? '0'+hour: hour;   
    }, 1000*60*24);
}
hourCounter();










