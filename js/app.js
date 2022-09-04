const loadNews = () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`
  fetch(url)
  .then(res => res.json())
  .then(data => displayNews(data.data))
}

const displayNews = newses =>{
  const newsContainer = document.getElementById('news-container');
  newses.forEach(news => {
    const newsDiv = document.createElement('div')
    newsDiv.classList.add('col');
    newsDiv.innerHTML = `
    <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src="${news.image_url}" alt="Album"></figure>
    <div class="card-body">
      <h2 class="card-title">${news.title}</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(newsDiv)
  })
}

document.getElementById('btn-search').addEventListener('click', function(){
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadNews(searchText)
})



loadNews()