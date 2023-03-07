//API key and URL for fetching news articles
const apiKey = "51e997fa85c04c298cfa08a63a2977d3";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

//HTML element where the news articles will be displayed
const cardsContainer = document.querySelector(".cards");

//Fetch news articles and display them on the page  
async function getNews() {
  try {
    const response = await fetch(apiUrl);
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
getNews();

document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
  });  