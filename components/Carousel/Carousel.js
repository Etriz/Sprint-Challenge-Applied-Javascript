/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imgArray = [];

const createCarousel = () => {
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const img01 = document.createElement("img");
  const img02 = document.createElement("img");
  const img03 = document.createElement("img");
  const img04 = document.createElement("img");
  const rightBtn = document.createElement("div");

  carousel.append(leftBtn, img01, img02, img03, img04, rightBtn);

  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  img01.src = "./assets/carousel/mountains.jpeg";
  img02.src = "./assets/carousel/computer.jpeg";
  img02.classList.toggle("show");
  img03.src = "./assets/carousel/trees.jpeg";
  img04.src = "./assets/carousel/turntable.jpeg";
  rightBtn.classList.add("right-button");

  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  const leftImg = () => {
    if (img01.classList.contains("show")) {
      img01.classList.remove("show");
      img04.classList.add("show");
    } else if (img02.classList.contains("show")) {
      img02.classList.remove("show");
      img01.classList.add("show");
    } else if (img03.classList.contains("show")) {
      img03.classList.remove("show");
      img02.classList.add("show");
    } else if (img04.classList.contains("show")) {
      img04.classList.remove("show");
      img03.classList.add("show");
    }
  };

  leftBtn.addEventListener("click", leftImg);

  const rightImg = () => {
    if (img01.classList.contains("show")) {
      img01.classList.remove("show");
      img02.classList.add("show");
    } else if (img02.classList.contains("show")) {
      img02.classList.remove("show");
      img03.classList.add("show");
    } else if (img03.classList.contains("show")) {
      img03.classList.remove("show");
      img04.classList.add("show");
    } else if (img04.classList.contains("show")) {
      img04.classList.remove("show");
      img01.classList.add("show");
    }
  };
  rightBtn.addEventListener("click", rightImg);

  return carousel;
};

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.append(createCarousel());
