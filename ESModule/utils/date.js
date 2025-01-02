const D = new Date()
const getToday = ()=>{
    // getMonth 月份是从0开始的 0 -11
    // getDate是获取今天是几号 getDay获取的是今天星期几（getDay获取的星期几是从1开始的0-6，不过0是星期天） 注意别弄混了
    return `${D.getFullYear()}-${D.getMonth() + 1}-${D.getDate()}`
}


export default getToday