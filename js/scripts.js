window.addEventListener("load", function() {
  const flavors = ["Choclate", "Mint"];
  const liElement1 = document.createElement("li");
  const liElement2 = document.createElement("li");
  const ulElement = document.createElement("ul");
  const body = document.querySelector("body");
  flavors.forEach(function(flavor) {
    liElement1.append(flavor);
    liElement2.append(flavor);
    ulElement.prepend(liElement1, liElement2);
    body.append(ulElement);
  });
});