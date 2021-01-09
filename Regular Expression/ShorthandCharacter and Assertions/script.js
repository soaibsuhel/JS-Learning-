
// Shorthand Character Classes
re = /w/; // Word Character - alpha numeric or _
re = /w+/; // One or more
re = /W/; // Non Word Character
re = /W+/; // one or more
re = /d/; // Digit
re = /d+/;
re = /D/; // Non digit
re = /s/; // Match white space
re = /S/; // Match non white space
re = /Hellob/; // Word Boundary
re = /bHellob/;

// Assertions
re = /x(?=yz)/; // Matches x only if x is before y
re = /x(?!yz)/;


str = "fsdfxyzfdsf";

console.log(re.exec(str));
 reTest(re,str);
 function reTest(re,str){
     if(re.test(str)){
         console.log(`'${str}' matches'${re.source}'`);
     }
     else{
         console.log(`'${str}' does't match '${re.sourse}'`);
     }
 }