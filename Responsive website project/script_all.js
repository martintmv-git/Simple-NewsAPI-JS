//API key and URLs for fetching news articles

//Insert your own api key bellow:
const apiKey = "";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const searchURLString = "https://newsapi.org/v2/everything?q=";

//HTML element where the news articles will be displayed
const cardsContainer = document.querySelector(".cards");

//Fetch news articles and display them on the page
async function getNews(query = "") {
  try {
    let url = apiUrl;
    if (query) {
      url = `${searchURLString}${query}&apiKey=${apiKey}`;
    }
    const response = await fetch(url);
    const data = await response.json(); // Convert response to JSON
    const articles = data.articles;
    cardsContainer.innerHTML = "";

    // Card element for every article
    articles.forEach((article) => {
      const card = `
        <div class="card">
          <img src="${article.urlToImage}" alt="${article.title}">
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read More</a>
        </div>
      `;
      cardsContainer.innerHTML += card;
    });
  } catch (error) {
    // Log errors 
    console.log(error);
  }
}

//Get news on page load
getNews();

//Search form submission
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchForm.search.value;
  getNews(query);
});

//Navigation menu toggle
document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
});
