console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";




fetch(imgUrl)
 .then((response) => response.json())
 .then((data) => {
  const images = data.message;
  images.forEach(function(image){
   const imageContainer= document.createElement('img');
   imageContainer.innerHTML = `<img src = ${image}>`
   document.querySelector('#dog-image-container').appendChild(imageContainer);
  })
 });
 
 let breedList = [];

 const breedUrl = 'https://dog.ceo/api/breeds/list/all';
 fetch(breedUrl)
  .then((response)=> response.json())
  .then((data) => {
   console.log(data.message);
   breedList = data.message;
   for (const breed in breedList) {
    const breedItems = document.createElement('li');
    breedItems.textContent = breed;
    document.querySelector('ul').appendChild(breedItems);
   }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const breedList = document.querySelector('ul');
  
    breedList.addEventListener('click', function(event) {
      const clickedListItem = event.target;
      clickedListItem.style.color = 'purple';
    });
  });

  function filterBreedsByLetter(letter) {
    const breedListContainer = document.querySelector('ul');
    breedListContainer.innerHTML = '';
    
    for (const breed in breedList) {
      if (breed.startsWith(letter)) {
        const breedItem = document.createElement('li');
        breedItem.textContent = breed;
        breedListContainer.appendChild(breedItem);
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let letterFilter = document.getElementById('breed-dropdown');
    letterFilter.addEventListener('change', function() {
      let selectedLetter = letterFilter.value;
      filterBreedsByLetter(selectedLetter);
    });
  });