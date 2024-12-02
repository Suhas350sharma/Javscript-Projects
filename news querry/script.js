const apikey='e038dfaf34474c0c85d7864363c53d75';

const blogcontainer=document.getElementById('blog-container');

const searchfield=document.getElementById('search-input');
const searchbutton=document.getElementById('search-button');

async function fetchRandomNews(){
    try {
        const apiurl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apikey}`;
         const response=await fetch(apiurl);
         const data=await response.json();
         return  data.articles;
    } catch (error)                                                                                  {
        console.error('Error fetching random news',error);
        return []
    }
}
searchbutton.addEventListener('click',async ()=>{
    const query=searchfield.value.trim();
    if(query!==''){
        try {
            const articles=await fetchNewsQuery(query)
            displayblogs(articles)
        } catch (error) {
            console.log('error fetching news by query',error)  
        }
    }
})
async function fetchNewsQuery(query){
    try {
        const apiurl = `https://newsapi.org/v2/everything?q=${query}&pageSize=100&apiKey=${apikey}`;
         const response=await fetch(apiurl);
         const data=await response.json();
         return  data.articles;
 
    } catch (error) {
        console.error('Error fetching random news',error);
        return []
    }
}
function  displayblogs(articles){
    blogcontainer.innerHTML='';
    articles.forEach((article)=>{
        const blogcard=document.createElement('div');
        blogcard.classList.add('blog-card');
        const img =document.createElement('img');
        img.src=article.urlToImage;
        img.alt=article.title;
        const title=document.createElement('h2');
        const truncatedtitle=
         article.title.length > 30? article.title.slice(0,30)+'...':article.title;
         title.textContent=truncatedtitle;

        const description=document.createElement('p');
        const truncatetext=
        article.description.length>120? article.description.slice(0,120)+'....':article.description;
        description.textContent=truncatetext;

        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(description);
        blogcard.addEventListener('click',()=>{
            window.open(article.url,"__blank");
        })
         blogcontainer.appendChild(blogcard);
    })
}
(async ()=>{
    try {
        const articles=await fetchRandomNews();
        displayblogs(articles);
    } catch (error) {
        console.error('Error fetching random news', error);
    }
})();

