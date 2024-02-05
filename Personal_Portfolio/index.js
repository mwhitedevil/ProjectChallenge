const icon = document.querySelector('.icon')
console.log(icon);
const  ullist = document.querySelector('ul')
console.log(ullist);

icon.addEventListener('click',()=>{
  ullist.classList.toggle('show')

  if(ullist.className ==='show'){
   document.getElementById('bar').className ='fa fa-times'
  }
  else{
    document.getElementById('bar').className = 'fa fa-bars'
  }
  
})

const resume = document.getElementById('resume')
resume.addEventListener('click',()=>{
    alert('Resume has been Download')
})
