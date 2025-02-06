let body = document.querySelector('body')
body.style.backgroundColor = '#1F242D'
body.style.fontFamily = 'cursive'
body.style.width = '90%'
body.style.margin = '0 auto'

let h1 = document.createElement('h1')
h1.textContent = 'My';
h1.style.color = 'white';
h1.style.textAlign = 'center'
h1.style.marginTop = '70px'

let a = document.createElement('a')
a.textContent = '  [Home]'
a.style.color = 'white'
a.style.fontSize = '16px'
a.setAttribute('href', './index.html')
a.style.textDecoration = 'none'

let span = document.createElement('span')
span.textContent = ' Skills';
span.style.color = 'cyan';

let box =document.createElement('div')
box.style.display = 'flex'
box.style.flexWrap = 'wrap'
box.style.justifyContent = 'space-between'
box.style.marginTop = '130px'

let img1 = document.createElement('img')
img1.setAttribute('src', './Group 16.svg')

let img2 = document.createElement('img')
img2.setAttribute('src', './Group 17.svg')

let img3 = document.createElement('img')
img3.setAttribute('src', './Group 18.svg')
img3.style.marginTop = '70px'

let img4 = document.createElement('img')
img4.setAttribute('src', './Group 19.svg')
img4.style.marginTop = '70px'

img1.setAttribute('data-aos', 'fade-down')
img2.setAttribute('data-aos', 'fade-left')
img3.setAttribute('data-aos', 'fade-right')
img4.setAttribute('data-aos', 'fade-up')

h1.append(span, a)
body.append(h1, box)
box.append(img1, img2, img3, img4)