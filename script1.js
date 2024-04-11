let object1 = {name:"person1",age:5};
let object2 ={age:5,name:"person1"};
//!step1:- convert the object to string and sort
let str1 =JSON.stringify(object1)
console.log(str1);
let str2 =JSON.stringify(object2)
console.log(str2);

//!compare
if(str1===str2)
{
    console.log("the JSON objects are equal");
}
else
{
    console.log("the JSON objects are not equal");
}