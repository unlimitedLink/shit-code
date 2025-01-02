import {getTabTemplate, today} from "./handler.js"


function renderTab(){
    let tabTemplate = getTabTemplate()
    let app = document.querySelector("#app")
    let luckDay = today()
    let div = document.createElement("div")
    div.id = "today"
    div.innerText = luckDay
    app.appendChild(div)
    tabTemplate.forEach(item=>{
        let ul = document.createElement("ul")
        let li = document.createElement("li")
        ul.innerText = `${item.tabName}`
        li.innerText = `${item.tabContent}`
        ul.appendChild(li)

        app.appendChild(ul)
    })
}


renderTab()