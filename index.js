
// reverse string
function revertString(str){
    let length=str.length;
    let middle=(length+1)/2-1;
    let arrStr=str.split("")//this will make array from string because strings are immutable but we can mutate array     
    for(let i=0;i<=middle;i++){
        let temp=arrStr[i];
        arrStr[i]=arrStr[length-1-i];
        arrStr[length-1-i]=temp;
    }

    str=arrStr.join("");//array method join
    return str;
}


console.log(revertString("ritik"))

// print all substring
function substr(str){
    let length=str.length;
    let middle=(length+1)/2-1;
    for(let i=0;i<=length-1;i++){
        for(let y=i+1;y<=length;y++)
            console.log(str.substring(i,y))
    }
    return str;
}
// "a", "ap", "app", "appl", "apple", "p", "pp", "ppl", "pple", "pl", "ple", "l", "le" "e", ""
substr("vivek")