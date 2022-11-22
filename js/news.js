const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category))
    .catch((err) => console.error(err));
};

const displayCategories = (categories) => {
  // for(const category of categories){
  //   console.log(category)
  // }
  const categoriesContainer = document.getElementById("category-container");
  categories.map((category) => {
    // console.log(category);
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.innerHTML = `
    <button onclick="loadCategoryDetail('${category.category_id}')">${category.category_name}</button>
   `;
    categoriesContainer.appendChild(categoryDiv);
  });
};

const loadCategoryDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  // console.log('get category detail', id)
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data))
    .catch((err) => console.error(err));
};

const displayNews = (news) => {
  // console.log(news.length);
  const newsDetail = document.getElementById("news-detail");
  news.forEach((nw) => {
    console.log(nw.length);
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col");
    newsDiv.innerHTML = `
   
    <div class="card card-side bg-base-100 shadow-xl">
          <figure><img class='thumbnail' src=${
            nw.image_url
          } alt="Movie"/></figure>
          <div class="card-body">
            <h2 class="card-title">${nw.title}</h2>
            <p>${nw.details.slice(0, 90)}...</p>
            <figure><img class="img-container" src=${nw.author.img}/>
            <small>Author:${nw.author.name}</small></figure>
            <p>Total View of this news: ${nw.total_view}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
    `;
    newsDetail.appendChild(newsDiv);
  });
};

loadCategories();
