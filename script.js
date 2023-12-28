data =[{
    'img1':'asset/Desain tanpa judul (1).png',
    'img2':'asset/Desain tanpa judul 10 .png',
    'title':'Colase',
    'subtitle':'Zenit',
    'desc': "dawdwadadwadwadwa."
},{    
    'img1':'asset/Desain tanpa judul 5 .png',
    'img2':'asset/Desain tanpa judul 11 .png',
    'title':'Colase',
    'subtitle':'Zenit',
    'desc': "dawdwadadwadwadwa."
    
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