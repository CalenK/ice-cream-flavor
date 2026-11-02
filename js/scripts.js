window.addEventListener("load", function() {
  const flavors = ["Choclate", "Mint"];
  const ulElement = document.createElement("ul");
  const body = document.querySelector("body");
  flavors.forEach(function(flavor) {
    const liElement = document.createElement("li");
    liElement.append(flavor);
    ulElement.append(liElement);
  });
  body.append(ulElement);
});