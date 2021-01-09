//example
let re;
let str;

//portal code

re = /^[0-9]{4}$/;
str = "2040";

//phone number
// 01732999999 +8810732999999 8801732999999

re = /^(\+)?(\88)?01[0-9]{9}$/;
str = "+8801732999999";

//Email Address
//soaib049@gmail.com
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "soaib049@gmail.com"

console.log(re.test(str));