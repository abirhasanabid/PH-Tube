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

// vedio time
function fidnTime(time) {
    const hour = parseInt(time / 3600);
    const remainingSecond = time % 3600;
    const min = parseInt(remainingSecond / 60);
    return `${hour} hour ${min} min ago`;
}

// click btn and find vedios

const removeClass=()=>{
    const stylesBtn = document.getElementsByClassName('find-Btn');
    for (const element of stylesBtn) {
        element.classList.remove('colrBtn')
    }
}

const loadVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeClass()
            const stylesBtn = document.getElementById(`styles-btn-${id}`);
            stylesBtn.classList.add('colrBtn')
            displayVedioCatagory(data.category)
        })
        .catch(err => console.error(err))
}


// display btnCategory
const displayCatagory = (catagories) => {
    const btnDiv = document.getElementById('btnDiv');
    catagories.forEach(item => {
        const btnContainer = document.createElement('div');
        btnContainer.innerHTML = `
        <button id="styles-btn-${item.category_id}" onclick="loadVideos(${item.category_id})" class="btn find-Btn">
        ${item.category}
        </button>
        `
        btnDiv.append(btnContainer);

    })
};

// display VedionCategory and making card
const displayVedioCatagory = (data) => {
    const vediosContainer = document.getElementById('vediosContainer');
    vediosContainer.innerHTML = '';
    if (data.length == 0) {
        vediosContainer.classList.remove("grid");
        vediosContainer.innerHTML = `
        <div class="w-full flex flex-col justify-center items-center mt-4">
            <img class="w-[200px]" src="./assets/Icon.png" alt="">
            <h1 class="font-bold text-3xl text-gray-900 max-w-md text-center mt-3">
            Oops!! Sorry, There is no content here</h1>
        </div>
        `;
        return;
    }
    else {
        vediosContainer.classList.add("grid")
    }
    data.forEach(item => {
        // console.log(item);
        const card = document.createElement('card');

        card.classList = 'card card-compact';
        card.innerHTML =
            `
        <figure class="h-[220px] relative">
           <img class="w-full h-full object-cover rounded-md" 
            src=${item.thumbnail}
            alt="Shoes"/>
            ${item.others.posted_date?.length == 0 ? '' : `<span class="absolute right-2 bottom-2 bg-gray-950 text-white p-1 rounded-lg"> ${fidnTime(item.others.posted_date)}</span>`}
           
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
            ${item.authors[0].verified ? '<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=yXOHowNYbgM5&  format=png" alt="">' : ''}
            
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

