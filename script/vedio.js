// load catagory
const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCatagory(data.categories))
        .catch(err => console.error(err))
}

// display category
const displayCatagory = (catagories) => {
    const btnDiv= document.getElementById('btnDiv');
    catagories.forEach(item => {
        const btn = document.createElement('button');
        btn.classList = 'btn';
        btn.innerText = item.category;
        btnDiv.append(btn);

    })
}

loadCatagory()

