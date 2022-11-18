var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// Passes the URL and specifies the method (in this case, GET), and waits for a response. When it gets the response, it runs the function and outoputs to the console.
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// Passes the URL (and defaults to the GET method), waits for a response, and returns the repsonse for the .then() function to use. The following function can then output to the console.
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (test) { // resonpse.json() = data? Looks like it could be anything. Whatever’s returned can be passed to the following function?
    console.log('Fetch Response \n-------------');
    console.log(test);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// First, create an XML HTTP request. Once the request is DONE, print to the console. Looks like there’s chaining/dot-notation for accessing the xhr/XMLHttpRequest().
// Looks like the call and response are defined. Then, the call is made (.open), then something happens with .send()?
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
