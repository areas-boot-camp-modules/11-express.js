// Access element using id
var headerDiv = document.getElementById('header');
var articlesDiv = document.getElementById('articles');

// Change style by accessing style object's properties
headerDiv.children[0].style["color"] = "white";
articlesDiv.children[0].children[1].style["font-size"] = "50px";
articlesDiv.children[0].children[1].style["text-decoration"] = "underline";
articlesDiv.children[0].children[1].style["text-decoration-color"] = "darkblue";
