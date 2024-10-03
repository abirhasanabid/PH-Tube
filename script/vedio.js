// load catagory
const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.categories))
        .catch(err => console.error(err))
}


// category
// : 
// "Music"
// category_id
// : 
// "1001"
const displayCatagory = (catagories) => {
    const btnDiv= document.getElementById('btnDiv');
    btnDiv.classList='gap-3 flex justify-center py-5'
    catagories.forEach(item => {
        const btn = document.createElement('button')
        btn.classList = 'btn';
        btn.innerText = item.category
        btnDiv.append(btn);

    })
}

loadCatagory()
