let num = 0


document.querySelectorAll('.arrows .arrow').forEach(item =>{
  item.addEventListener('click', (e)=>{
    
      console.log(e.currentTarget.classList)
      if(e.currentTarget.classList.contains('left') && num == 0){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(document.querySelector('#reviews').innerHTML = '')
        .then(json => document.querySelector('#reviews').append(json[num].body))
      }else if(e.currentTarget.classList.contains('left') && num >=1){
        num -- 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(document.querySelector('#reviews').innerHTML = '')
        .then(json => document.querySelector('#reviews').append(json[num].body))
      }else if(e.currentTarget.classList.contains('right') && num >= 0){
        num ++
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(document.querySelector('#reviews').innerHTML = '')
        .then(json => document.querySelector('#reviews').append(json[num].body))
      }
  })
})

function addJson(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(document.querySelector('#reviews').innerHTML = '')
  .then(json => document.querySelector('#reviews').append(json[num].body))
}

addJson()
   

/*
function addJsonLeft(){
    if(num == 0){
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(document.querySelector('#reviews').innerHTML = '')
      .then(json => document.querySelector('#reviews').append(json[num].body))
    }else if(num <= 1){
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(document.querySelector('#reviews').innerHTML = '')
      .then(json => document.querySelector('#reviews').append(json[num--].body))
    }
    
}

function addJsonRight(){
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(document.querySelector('#reviews').innerHTML = '')
      .then(json => document.querySelector('#reviews').append(json[num++].body))
    
}*/

//Fazer um forEach amanha nos arrows