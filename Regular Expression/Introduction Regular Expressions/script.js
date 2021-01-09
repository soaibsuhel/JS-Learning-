//Regular Expression
//Pattten Matching Technique
let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i; //i = case insensitive

console.log(re);
console.log(re.source);

str = "Hello World";
str = "Again Hello World";
str = " heeel World";
str = "sdshEllo World";
str = "World";

// exec() - Returns result in an arry or null
let result = re.exec(str);

// test() - ture/false
result = re.test (str);

// match() - Returns arry or null
str = "sdshEllo World";
result = str.match(re);

// searceh() - Retunrs index of the first match or -1

str = "World";
result = str.search(re); 
//replace() - return new string
str = "Again Hello World";
let newstr = str.replace(re, "Hi")
console.log(newstr);

console.log(result);
