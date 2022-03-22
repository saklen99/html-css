var newelement = document.createElement("p");
console.log(newelement);

var news = document.createTextNode("hiiiiiii hellooooo");
console.log(news);

newelement.appendChild(news);

document.getElementById("test").appendChild(newelement);
console.log("newelement");

