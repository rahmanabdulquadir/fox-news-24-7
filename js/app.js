const loadNews = () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`
  fetch(url)
  .then(res => res.json())
  .then(data => displayNews(data.data))
}

const displayNews = newses =>{
  const newsContainer =