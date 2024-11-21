/*

Fetch API - provides an interface for fetching (sending/receiving) resources.

It uses Request & Response objects.

The 'fetch()' method is used to fetch a resource (data).


e.g;

let promise = fetch(url, [options]);



promises plays a imp role in Fetching API(s).

                     ________
request  ------>    |   API  |
response <------    ----------

Note:
API returns us response. API actually works on the Request & Response Cycle (API Calls are done in JavaScript, using "Fetch API").

*/


// You can name this file as, app.js
const API_BASE_URL = `https://cat-fact.herokuapp.com`;

const url = API_BASE_URL + '/facts';

const getFactButton = document.querySelector("#get-fact");
const factText = document.querySelector("#fact-text");

let promise = fetch(url);
// console.log(promise);


/*

There are 2 ways to Fetch Response, returned from the API.

1) Promise Chain
e.g,
.then{}.catch{}

2) async/ await
e.g,
await fetch(url).then().catch()

-----------------------------
Note:
2nd Method is More Better.

Note:
When Data Changes, page usually reloads. But when we calls APIs internally.
This do not reload the page, bcz we are loading data during RUNTIME.
*/

async function getFacts() {

    console.log('Getting data ....');
    

    let response = await fetch(url);
    let data = await response.json();
    // console.log(response, response.status, response.ok);`

    let randFact = Math.floor(Math.random() * data.length);

    console.log("Facts Data -----", data[randFact].text);
    factText.innerText = data[randFact].text;
    

}

/*
Now, you have seen that our API calls, works on the Request & Response Object.


When we do not specify [options] to the "fetch()" function. It sends a particular type of Request.
Which is the GET Request. There are different Types of NETWORK Requests.

1) GET      // This only fetch data - yeh sirf data laneee ka kaam krti haa
2) POST
3) PUT
4) DELETE
5) PATCH

---------
Note:
When we focus the response Object, this is not an accrate response.
We are expecting the Response, which we have seen on running GET Request on the Browser.

We cannot see our Actual Data, we want from the API, in the response Object.
We need to parse the response Object, to get the actual data.
*/


/*

For this, we need to Understand the Terms

1) AJAX - is Asynchronous JS & XML


2) JSON - is JavaScript Object Notation


3) json() method:   returns a second promise that resolves with the reslt of parsing the response body text as JSON. (Input : Response Object - as JSON, Output : Response Object as JS Object)

--------------------

Now, Let's discuss about some older Historical ways of Fetch API (sending Request to API)

In older days, when we don't have JavaScript & JSON. We fetch data from the API, and the response is returned in the form of the XML.
Nowadays, the Response Data Format is rarely, XML. Generally, It is JSON Format.

Data Format:    Let relate this with example. You want to send some money to your Closest friend.
You can send money in the form of Cash, Cheque, UPI, or Bank Transfer (These are different Formats of sending money).
At the end, friend is taking money. But , you are sending money in different formats. That's why you have to use different Techiques to deal with these different Formats. He needs to convert the appropriate Format in to the money first.


*/


getFactButton.addEventListener("click", getFacts);
