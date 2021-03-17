const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const dogContainer = document.getElementById('dog-image-container')
document.addEventListener("DOMContentLoaded",init);

function init(){
    fetchDog();
}

function fetchDog(){
    fetch(imgUrl, { method: 'GET'})      
    .then(r => r.json())
    .then(data => {
        data.message.forEach(d =>{
            dogContainer.src(d) 
        })
        })
}
