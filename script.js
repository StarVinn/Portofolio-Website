data =[{
    'img1':'asset/Desain tanpa judul (1).png',
    'img2':'asset/Desain tanpa judul 10 .png',
    'title':'Kolase Oshi',
    'subtitle':'Wallpaper Desktop',
    'desc': ""
}]
data2 =[{
    'img1':'asset/desain 720x1280 (3) (1).png',
    'img2':'asset/desain 720x1280 (4) (1).png',
    'title':'Kolase Oshi',
    'subtitle':'Wallpaper Handphone',
    'desc': ""
}]
    


var container =document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
            <div class="img-project">
                <img src="`+element.img1+`" alt="">
                <img src="${element.img2}" alt="">
            </div>
            <div class="desc-project">
                <h1>${element.title}</h1>
                <h2>${element.subtitle}</h2>
                <p>${element.desc}</p>
            </div>
            <button class="read-more">Read More</button>
        </div>`
});
data2.forEach(element => {
    container.innerHTML +=
    `<div class="project">
            <div class="img-project-2">
                        <img src="`+element.img1+`" alt="">
                        <img src="${element.img2}" alt="">
                    </div>
                    <div class="desc-project-2">
                        <h1>${element.title}</h1>
                        <h2>${element.subtitle}</h2>
                        <p>${element.desc}</p>
                    </div>
                    <button class="read-more">Read More</button>
                </div>`            
});
