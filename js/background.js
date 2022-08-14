const bgImages = ["../img/01.jpg", "../img/02.jpg", "../img/03.jpg","../img/04.jpg","../img/05.jpg","../img/06.jpg","../img/07.jpg","../img/08.jpg"];
const chosenBgImages = bgImages[Math.floor(Math.random() * bgImages.length)];

const body = document.querySelector("body");
body.style.backgroundImage = "url('"+ chosenBgImages + "')";