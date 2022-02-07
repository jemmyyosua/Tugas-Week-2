let blogs = []

// Fungsi untuk mengambil data object form
function addBlog(event){

    event.preventDefault()

    let title = document.getElementById('input-title').value
    let startDate = document.getElementById('start-date').value
    let endDate = document.getElementById('end-date').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-image')

    image = URL.createObjectURL(image.files[0])

    // fungsi mencari selisih input date


    let blog = {
        title,
        duration : daterange(),
        startDate,
        endDate,
        description,
        icon1 : checkbox1(),
        icon2 : checkbox2(),
        icon3 : checkbox3(),
        icon4 : checkbox4(),
        image,
    }

    console.log(blog)
    
    blogs.push(blog)

    renderBlog()

         
}


// Menampilkan data object ke card html
function renderBlog(){
  let lengthData = blogs.length

  let blogContainer = document.getElementById('contents')
  blogContainer.innerHTML = firstBlogContent()

  for(let i = 0; i < lengthData; i++){

           console.log(blogs[i])

          blogContainer.innerHTML += `
          <div class="card">
          <a href="detail.html"><img class="img1" src="${blogs[i].image}" alt="Beruang"></a>
          <a href="detail.html"><h3>${blogs[i].title}</h3></a>
          <h4>${blogs[i].duration}</h4> 
          <p class="p1">${blogs[i].description}</p>  
          <div class="icon" id="icon">
          ${blogs[i].icon1}
          ${blogs[i].icon2}
          ${blogs[i].icon3}
          ${blogs[i].icon4}
          </div>  
          <div class="list-card-button">
              <button type="button" class="card-button">Edit</button>
              <button type="button"class="card-button">Delete</button>
          </div>
      </div>
  </div>
</div>    `

  }

}


function daterange(){
  let startDate = document.getElementById('start-date').value
  let endDate = document.getElementById('end-date').value

  const distance = new Date(endDate) - new Date(startDate)

  const milisecond = 1000
  const secondInMinute = 60
  const minuteInHour = 60
  const secondInHour = secondInMinute * minuteInHour
  const hoursInDay = 23
  const dayInMonth = 30
  const monthInYear = 12

  let yearDistance = distance / (milisecond * secondInHour * hoursInDay * dayInMonth * monthInYear)
    
  if (yearDistance >= 1) {
    return Math.floor(yearDistance) + ' Tahun'
  } else{
    let monthDistance =  distance / (milisecond * secondInHour * hoursInDay *dayInMonth)

  if (monthDistance > 1) {
    return Math.floor(monthDistance) + ' Bulan'
  } else{
    let dayDistance = distance / (milisecond * secondInHour * hoursInDay) 

  if (dayDistance > 1){
    return Math.floor(dayDistance) + ' Hari'
  }
  }
  }
}


function checkbox1(){
  let nodeJs = document.getElementById('node-js').checked

  if(nodeJs == true){
    return`<img src="assets/node-js.png" alt="google play">`  
  } else{
    return ""
  }


}

function checkbox2(){
  let reactJs = document.getElementById('react-js').checked

  if(reactJs == true){
    return`<img src="assets/react-js.png" alt="google play">`
  } else{
    return ""
  }

}

function checkbox3(){
  let nextJs = document.getElementById('next-js').checked

  if(nextJs == true){
    return`<img src="assets/next-js.png" alt="google play">`
  } else{
    return ""
  }

}



function checkbox4(){
  let typeScript = document.getElementById('typescript').checked

  if(typeScript == true){
    return`<img src="assets/typescript.png" alt="google play">`
  } else{
    return ""
  }

}



// mengembalikan nilai awal agar tidak double 
function firstBlogContent(){
  return `
  <div class="card">
  <a href="detail.html" target="_blank"><img class="img1" src="assets/c1.jpg" alt="Beruang"></a>
  <a href="detail.html" target="_blank"><h3>Dumbways Web Development 2022</h3></a>
  <h4>Durasi : 3 bulan</h4> 
  <p class="p1"">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea blanditiis explicabo minus ipsum sed, minima vel ab voluptatem itaque Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur, harum fugiat dolores aliquam exercitationem saepe esse dignissimos, quasi velit similique distinctio soluta ab quibusdam! Facere illum vitae asperiores veritatis!</p>  
  <div class="icon" id="icon">
      <img src="assets/node-js.png" alt="node js">
      <img src="assets/react-js.png" alt="react js">
      <img src="assets/next-js.png" alt="next js">
      <img src="assets/typescript.png" alt="typescript">
  </div>  
  <div class="list-card-button">
      <button type="button" class="card-button">Edit</button>
      <button type="button"class="card-button">Delete</button>
  </div>
</div>
</div>
</div>
  
  `
  
}

