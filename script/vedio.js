// load catagory
const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.categories))
        .catch(err => console.error(err))
}

// vedio catagory
const videoCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVedioCatagory(data.videos))
        .catch(err => console.error(err))
}

// display  btnCategory
const displayCatagory = (catagories) => {
    const btnDiv = document.getElementById('btnDiv');
    catagories.forEach(item => {
        const btn = document.createElement('button');
        btn.classList = 'btn';
        btn.innerText = item.category;
        btnDiv.append(btn);

    })
}



// const copyObj = {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }
// display VedionCategory
const displayVedioCatagory = (data) => {
    const vediosContainer = document.getElementById('vediosContainer');
    data.forEach(item => {
        console.log(item);

        const card = document.createElement('card');
        card.classList = 'card card-compact';
        card.innerHTML =
            `
        <figure class="h-[220px]">
    <img class="w-full h-full object-cover rounded-md" 
      src=${item.thumbnail}
      alt="Shoes"/>
  </figure>
  <div class="py-2">
    <div class="flex gap-2">
       <div>
         <img class="w-10 h-10 rounded-full object-cover" src="${item.authors[0].profile_picture}" alt="">
        </div>
        <div>
          <h2 class="card-title font-bold">${item.title}</h2>
          <div class="flex items-center gap-2">
            <p class="text-gray-500">${item.authors[0].profile_name}</p>
            <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=yXOHowNYbgM5&  format=png" alt="">
          </div>
          <p class="text-gray-500">${item.others.views} views</P>
       </div>
    </div>
    
  </div>
        `;
        vediosContainer.append(card);
    })
}



loadCatagory();
videoCatagory()

