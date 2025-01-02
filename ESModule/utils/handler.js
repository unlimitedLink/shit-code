import { getTabContent, getTabs } from "./data.js";
export {default as today} from "./date.js"

export const getTabTemplate = ()=> {
    let tabContent = getTabContent()
    let tabs = getTabs()
    let data = []
    tabs.forEach((item) => {
        let content = tabContent.filter(i=>{
            return i.tabId == item.id
        })
        data.push(
            {
                tabName: item.tab,
                tabContent: content[0].content
            }
        )
    })

    return data
}