//! Use the rest countries 'API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console 
//! XMLHTTPREQUEST
//! step 1:- create a XHR object 
var  request = new XMLHttpRequest() ;
//!https://restcountries.com/v3.1/all
//! step 2:- openning a new connection to server
request.open("GET", "https://restcountries.com/v3.1/all", true);

//! step 3:- Initiating a bridge to server / sending request
request.send();

//!step 4:- server response 

request.onload = function()
{
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data)
    //console.log(result);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        //console.log("countryname:"+" "+result[i].name.common ,"Region:"+" "+result[i].region,"subregion:"+" "+result[i].subregion);
        console.log(result[i].flags.png)
    }

}


//! XMLHTTPREQUEST
//! step 1:- create a XHR object 
var  request = new XMLHttpRequest() ;
//!https://restcountries.com/v3.1/all
//! step 2:- openning a new connection to server
request.open("GET", "https://restcountries.com/v3.1/all", true);

//! step 3:- Initiating a bridge to server / sending request
request1.send();

//!step 4:- server response 

request1.onload = function()
{
    var data = request1.response;
    //console.log(data);
    var result1 = JSON.parse(data1)
    //console.log(result1);
    console.log(result1);
    for(var i=0;i<result1.length;i++)
    {
        //console.log("countryname:"+" "+result1[i].name.common ,"Region:"+" "+result1[i].region,"subregion:"+" "+result1[i].subregion);
        console.log(result1[i].flags.png)
    }

}