

const homeContent = document.querySelector('#home-content')

// const body = document.querySelector('body')



const categories = document.querySelector('#category-list')

const getUser = localStorage.getItem('user')
const user = JSON.parse(getUser)


function getData () {
    const newtTitle = document.createElement("h1");
    newtTitle.classList.add('welcome-user')
    newtTitle.innerText = `Welcome ${user}`
    homeContent.insertBefore(newtTitle , homeContent.children[0])
    
    fetch("https://jservice.io/api/categories?count=8")
      .then((response) => response.json())
      .then((data) => {
        const displayData = data.map((element) => {
            const newDiv = document.createElement("div");
            // newDiv.classList.add('category')
            const questionTtile = document.createElement("h1");
        
            questionTtile.innerText = `{ ${element.title} }`
           
            questionTtile.addEventListener('click', () => {
                
                fetch(`https://jservice.io/api/category?id=${element.id}`)
                .then((response) => response.json())
                .then((data) => {
                    let arr = data.clues.slice(0, 10)
                    localStorage.setItem('array', JSON.stringify(arr))
                    document.location.href="quiz.html"
                    
                                })
                
                })
            newDiv.appendChild(questionTtile);
            categories.appendChild(newDiv)
        })
      });
}

getData()