// import './style.css'
// import './board.css'

const htmlfile = "dev/001-01-01.html"//"001/001-01-02.html"

const htmlfiles = [
    ["1-1-1","001-01-01.html"],
    ["1-1-2","001-01-02.html"],
    ["1-2-1","001-02-01.html"],
    ["1-2-2","001-02-02.html"],
    ["1-2-3","001-02-03.html"],
    ["2-1-1","002-01-01.html"],
    ["2-1-2","002-01-02.html"],
    ["2-2-1","002-02-01.html"],
    ["2-2-2","002-02-02.html"],
    ["2-2-3","002-02-03.html"],
    ["3-1-1","003-01-01.html"],
    ["3-1-2","003-01-02.html"],
    ["3-2-1","003-02-01.html"],
    ["3-2-2","003-02-02.html"],
    ["3-2-3","003-02-03.html"],
    ["3-3-1","003-03-01.html"],
    ["3-3-2","003-03-02.html"],
]

const htmlfile_select = document.querySelector('#htmlfile')
htmlfiles.forEach((data) => {
    const opt = document.createElement('option')
    opt.text = data[0]
    opt.value = data[1]
    htmlfile_select.append(opt)
})

const handlerHtmlfile = async (e) => {
    console.log(e.target.value)
    const file = e.target.value
    const res = await fetch(`dev/${file}`)
    const text = await res.text()
    console.log(text)
    document.querySelector('#app').innerHTML = text
}
htmlfile_select.addEventListener("change", handlerHtmlfile)

const res = await fetch(htmlfile)
const text = await res.text()
console.log(text)
document.querySelector('#app').innerHTML = text

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))