

// document.querySelector("html").onclick = function () {
//   alert("Ouch! Stop poking me!");
// };

var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ntdlogo.jpg") {
    myImage.setAttribute("src", "images/ntdlogo2.jpg");
  } else {
    myImage.setAttribute("src", "images/ntdlogo.jpg");
  }
};

// var myButton = document.querySelector("button");
// var myHeading = document.querySelector("h1");

// function setUserName() {
//   let myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.innerHTML = "Shut up, " + myName;
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem("name");
//   myHeading.innerHTML = "Shut up, " + storedName;
// }

// myButton.onclick = function () {
//   setUserName();
// };

// function setUserName() {
//   let myName = prompt('Please enter your name.');
//   if(!myName || myName === null) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = 'Shut up, ' + myName;
//   }
// }