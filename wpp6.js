// Check whether a given positive number is a multiple of 3 or a multiple of 7




function test (x){

    if(x%3==0 || x%7==0){
         return true;
    }
    else{
        return false
    }


}
console.log( test(24))
console.log(test(21))
console.log(test(2))