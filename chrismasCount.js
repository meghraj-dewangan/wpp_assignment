let today = new Date();  //get today's date
let currentYear = today.getFullYear();  //get current year
let chrismasDate = new Date(currentYear,11,25);  //Chrismas Date 25 Dec

 // If today's date is after Christmas, set the Christmas date to next year's Christmas

if(today>chrismasDate){
    chrismasDate.setFullYear(currentYear+1);
}

let oneDay = 24*60*60*1000;  // get day in milliseconds

let differenceDay = Math.ceil((chrismasDate.getTime()-today.getTime())/oneDay)
console.log(differenceDay+' '+ 'day')