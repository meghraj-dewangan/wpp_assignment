//Check whether a string starts with 'java' and false otherwise


// 1st Method

function startJava(str){
const front = 'Java'
    if( str.startsWith(front)){
        const front = str.slice(0,5)
        return true

    }else{return false}
}
console.log(startJava('Jav123'))
console.log(startJava('Javascript'))
console.log(startJava('python'))



// 2nd Method


function starts(string){
    const fr = 'java'
    if(string.slice(0,fr.length)===fr){
        return true
    }else{
        return false
    }
}

console.log(starts('javapython'));
console.log(starts('javpython'));


