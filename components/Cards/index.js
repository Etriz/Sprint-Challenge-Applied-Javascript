// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const createArticle = ({ headline, authorPhoto, authorName }) => {
  const card = document.createElement("div");
  const articleHeadline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byline = document.createElement("span");

  card.append(articleHeadline, author);
  author.append(imgContainer, byline);
  imgContainer.append(img);

  card.classList.add("card");
  articleHeadline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  articleHeadline.textContent = headline;
  img.src = authorPhoto;
  byline.textContent = `By ${authorName}`;

  return card;
};
const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const data = res.data.articles;
    // console.table(data);

    const dataArray = Object.values(data);
    // console.log(dataArray);
    dataArray.forEach(articleType => {
      articleType.forEach(item => {
        cardsContainer.append(createArticle(item));
      });
    });
    // ? long form way of doing this ?
    // const javascriptArticles = data.javascript;
    // const bootstrapArticles = data.bootstrap;
    // const technologyArticles = data.technology;
    // const jqueryArticles = data.jquery;
    // const nodeArticles = data.node;
    // javascriptArticles.forEach(item => {
    //   cardsContainer.append(createArticle(item));
    // });
    // bootstrapArticles.forEach(item => {
    //   cardsContainer.append(createArticle(item));
    // });
    // technologyArticles.forEach(item => {
    //   cardsContainer.append(createArticle(item));
    // });
    // jqueryArticles.forEach(item => {
    //   cardsContainer.append(createArticle(item));
    // });
    // nodeArticles.forEach(item => {
    //   cardsContainer.append(createArticle(item));
    // });
  })
  .catch(err => {
    console.log("Error: ", err);
  });
