// Remove a character at the specified position of a given string and return the new string




function removeCharacter(string, position) {
    
    return string.slice(0, position)+string.slice(position+1) 
}
 
console.log(removeCharacter("javaScript",4));
console.log(removeCharacter("javaScript",2))