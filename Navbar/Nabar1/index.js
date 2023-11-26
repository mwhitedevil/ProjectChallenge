const icon = document.getElementById('bar')
const button = document.getElementById('btn')
const ulli = document.querySelector('ul')
    icon.addEventListener('click',()=>{
        ulli.classList.toggle('show')
        console.log(ulli);


        if(ulli.className ==='show'){
            document.getElementById('bar').className ="fa fa-times"
        }
        else{
            document.getElementById('bar').className ="fa fa-bars"
        }

    })
