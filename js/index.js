const loadCategory = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategory(data.data.news_category))
}

const loadNews = () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`
  fetch(url)
  .then(res => res.json())
  .then(data => displayNews(data.data))
}
const displayNews = (datas) => {
  for(data of datas){
    console.log(data)
    
  }
}
loadNews()

const displayCategory = categories =>{
  const categoryContainer = document.getElementById('category-container');
  categories.forEach(category => {
    const categoryDiv = document.createElement('div')
    // categoryDiv.classList.add('col');
    categoryDiv.innerHTML = `
    <a onclick = "loadNews()" href="">${category.category_name}</a>
    `;
    categoryContainer.appendChild(categoryDiv)
  })
}

loadCategory();