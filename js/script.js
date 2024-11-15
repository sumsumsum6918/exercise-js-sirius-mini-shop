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

const image = document.querySelectorAll("img");
image[0].classList.remove("logo");

const newAnchor = document.createElement("a");
const navBar = document.querySelector("nav");

newAnchor.innerText = "Subscribe";

navBar.insertAdjacentElement("afterbegin", newAnchor);

const newArticle = document.createElement("article");
const mainElement = document.querySelector("main");

mainElement.insertAdjacentElement("beforeend", newArticle);

newArticle.innerHTML = `<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Forrest</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
            <button>Buy</button>`;

image[0].addEventListener("click", () => {
  console.log("found you!");
});

const article = document.querySelectorAll("article");

articlesArray = [article[0], article[1], article[2]];
console.log(articlesArray);

for (let i = 0; i < articlesArray.length; i++) {
  article[i].addEventListener("click", () => {
    console.log(`Hi, I am article ${h3[i].innerText}.`);
  });
}
