var d1= new Date().getTime()
var g1 = new Vue({
  el: '#vue-g1',
  data: {
    g1: ['react', 'vue', 'js', 'node', 'mongodb', 'express', 'firebase', 'p5', 'brain', 'tensorflow', 'bootstrap', 'materialize', 'tailwind', 'python', 'tkinter', 'panda', 'scikit-learn', 'numpy', 'mat lab', 'java', 'c lang', 'processing lang', 'arduino']
  }
})

var g2 = new Vue({
  el: '#vue-g2',
  data: {
    g2: [
      { name: 'basic web package', price: '1,999 - 3,999', img: 'https://i.ibb.co/SV45ZFT/p2.jpg', benefit: ['SEO', 'fast website', 'basic panels', 'media gallery'] },
      { name: 'prime web package', price: '4,999 - 9,999', img: 'https://i.ibb.co/XxbCzy1/p3.jpg', benefit: ['SEO', 'fast website', 'prime panels ', 'media gallery', '1yr maintenance'] },
      { name: 'extreme web package', price: '13,999 - 49,999', img: 'https://i.ibb.co/h9m9yJM/p4.jpg', benefit: ['SEO', 'fast website', 'multi-panels', 'media gallery', '1yr maintenance', 'automation', 'payment gateways', '+A.I for 49,999 more'] },
      { name: 'web app package', price: '29,999 - 149,999', img: 'https://i.ibb.co/qCJdB49/p1.jpg', benefit: ['fast', 'custom panels', '1.5yr maintenance', 'automation', '+A.I for 99,999 more', 'other app features'] },
      ]
  }
})

var bar = new Vue({
  el: '#vue-bar',
  data: {
    toggle: "h-0 overflow-hidden"
  }
})

function show() {
  if (bar.toggle == 'h-0 overflow-hidden') {
    bar.toggle = "md:p-10 duration-75 rounded-md py-10 px-5 md:my-10 pt-24 grid grid-cols-3 px-2  shadow duration-75 fixed top-0 bg-white"
  } else {
    bar.toggle = 'h-0 overflow-hidden'
  }
}

var home = new Vue({
  el: '#vue-home',
  data: {
    stilo: ''
  }
})

var basicStyle = `background-image:url(https://www.aigtechnologies.in/images/slides/web-development.jpg);background-size: 100%;background-repeat:no-repeat; background-position:center;`
home.stilo = basicStyle

document.addEventListener("DOMContentLoaded", function() {
  document.body.style.display = 'block'
  console.log(new Date().getTime()-d1)
})

function email() {
  window.open('mailto:anandecho1000@gmail.com', '_blank')
}

function insta() {
  window.open('https://instagram.com/fire_serpant?utm_medium=copy_link', '_blank')
}

function fb() {
  window.open('https://www.facebook.com/raghavkashy', '_blank')
}

function whatsapp() {
  window.open('https://wa.me/qr/OBPEUPDPHS3VN1', '_blank')
}

if ('serviceWorker' in navigator) {
  console.log('serviceWorker: supported')
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => console.log('serviceWorker: registered ')).catch(er => console.log('serviceWorker: registration failed '))
  })
}
