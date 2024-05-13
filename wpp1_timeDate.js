// ---this is from my side code---
function timeDateOutput(){
const newDate = new Date();
const newDateLocal = newDate.toLocaleString();
const weekObject = ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];
const extractWeekNumber = weekObject[newDate.getDay()];

//get hour,minute,seconds

let hour = newDate.getHours();
let minute = newDate.getMinutes();
let second = newDate.getSeconds();

//hendel am and pm

const ampm = hour>=12 ? 'pm':'am';

//condition apply for 12 hr formate

hour = hour%12;
if(hour==0){
    hour = 12
}


console.log('Today is:',extractWeekNumber);

console.log('Current time is:'+' '+hour+ampm+':'+minute+':'+second);

}

timeDateOutput();