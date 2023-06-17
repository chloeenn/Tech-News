//Element - Tech
const title = document.getElementsByClassName('card-title');
const description = document.getElementsByClassName('description');
const author = document.getElementsByClassName('fw-bold mb-0');
const publishedAt = document.getElementsByClassName('text-muted mb-0');
const imageURL = document.getElementsByClassName('fit-cover');
const source = document.getElementsByClassName('text-primary card-text mb-0');
//Element 
const titleBus = document.getElementsByClassName('title-bus');
const descriptionBus = document.getElementsByClassName('description-bus');
const authorBus = document.getElementsByClassName('author-bus');
const publishedAtBus = document.getElementsByClassName('published-bus');
const imageURLBus = document.getElementsByClassName('img-bus');
const sourceBus = document.getElementsByClassName('source-bus');
//https://newsapi.org
const apiKey = "0638ecb587e647638c2609441354408f";
const techURL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0638ecb587e647638c2609441354408f";
const businessURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0638ecb587e647638c2609441354408f";
const getTechAPI = async () => {
    let response = await fetch(techURL);
    let data = await response.json();
    displayTech(data);
}
const displayTech = (data) => {
    for (let i = 0; i < title.length; i++) {
        title[i].innerHTML = data.articles[i].title;
        description[i].innerHTML = data.articles[i].description;
        author[i].innerText = data.articles[i].author;
        publishedAt[i].innerHTML = data.articles[i].publishedAt;
        imageURL[i].src = data.articles[i].urlToImage;
        source[i].innerHTML = data.articles[i].source.name;

        [imageURL[i], title[i]].forEach((Element) => {
            Element.addEventListener('click', () => {
                window.open(data.articles[i].url)
            })
        })
    }
}


const getBusAPI = async () => {
    let response = await fetch(businessURL);
    let data = await response.json();
    displayBus(data);

}
const displayBus = (data) => {
    for (let i = 0; i < titleBus.length; i++) {
        titleBus[i].innerHTML = data.articles[i].title;
        descriptionBus[i].innerText = data.articles[i].description;
        authorBus[i].innerText = data.articles[i].author;
        publishedAtBus[i].innerHTML = data.articles[i].publishedAt;
        imageURLBus[i].src = data.articles[i].urlToImage;
        sourceBus[i].innerHTML = data.articles[i].source.name;
        titleBus[i].addEventListener('click', () => {
            window.open(data.articles[i].url)
        })
    }
}

getTechAPI();
getBusAPI();