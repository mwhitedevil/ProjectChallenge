const Aces_key = 'xZ_d0YdbpbtbK1EpbUelvFil3kTJtPxbONhfNEVinX8'
const searchBtn = document.getElementById('serachbtn')
const ShowData = document.querySelector('.showdata')
const MoreBtn = document.getElementById('more');




let Page = 1; 

const getData = async function(searchInput,PageNo){
    let fetchData = await fetch(`https://api.unsplash.com/search/photos?query=${searchInput}&per_Page=28&P=${PageNo} age&client_id=${Aces_key}
    `)
    console.log(fetchData);

    let JsonData = await fetchData.json()
    console.log(JsonData);

if(Page == 1){
        ShowData.innerHTML =''
}
if(searchInput === ''){
    alert('Please Enter the value')
}
else{
    MoreBtn.style.display='block'
}

    
    JsonData.results.forEach(element => {
        console.log(element);


        const createDiv = document.createElement('div')
        console.log(createDiv);
        createDiv.classList.add('card')
        ShowData.appendChild(createDiv)
        createDiv.innerHTML=`
        <img src="${element.urls.small}" alt="">
        <a href="${element.links.download}" target="_blank">${element.alt_description}</a>`

        
    });
 
}


searchBtn.addEventListener('click',()=>{
    const searchInput = document.getElementById('serachinput').value
    console.log(searchInput);
    getData(searchInput)

    
 })

 MoreBtn.addEventListener('click',function(){
    const searchInput = document.getElementById('serachinput').value
    console.log(searchInput);
    getData(searchInput,Page++)

 })