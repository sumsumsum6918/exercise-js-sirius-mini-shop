const h3 = document.querySelectorAll("h3");

h3[0].innerText = "Potato";

const anchor = document.querySelectorAll("a");
anchor[0].innerText = "Start";
anchor[2].innerText = "Mail Us";

const paragraph = document.querySelectorAll("p");
paragraph[1].innerText = "This hoodie is on FIRE.";

const button = document.querySelectorAll("button");
button[1].innerText = "Roast";
button[1].style.backgroundColor = "maroon";

const figure = document.querySelectorAll("figure");
figure[1].style.backgroundColor = "gray";

paragraph[3].innerText = "Kalkstensvagen 1, Lund";

paragraph.forEach((item) => {
  item.style.color = "pink";
});

button.forEach((button) => {
  button.innerText = "Add to Cart";
});

anchor[0].classList.add("active");

const image = document.querySelectorAll("image");
