//Create a new string from a  given string taking the last 3 characters and added at both the front and back


function text_back(str){

    if(str.length>=3){
       const lastThreeChar = str.slice(-3);
        
        return lastThreeChar+str+lastThreeChar
    }else{
        return false;
    }
}
console.log(text_back("Assignment"))
console.log(text_back("Internshala"))